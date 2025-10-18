// server/api/docuseal/create-lease-submission.post.ts
interface DocusealSubmitter {
  id: number
  slug: string
  email: string
  role: string
  embed_src: string
  name: string
  status: string
}

interface SubmitterInput {
  role: string
  email: string
  name: string
}

interface RequestBody {
  submitters: SubmitterInput[]
}

export default defineEventHandler(async (event) => {
  const body = await readBody<RequestBody>(event)
  const { submitters } = body
  const config = useRuntimeConfig()

  if (!submitters || submitters.length === 0) {
    throw createError({
      statusCode: 400,
      message: 'At least one submitter is required'
    })
  }

  try {
    // Create submission with all submitters at once
    const response = await $fetch<DocusealSubmitter[]>(
      `${config.docusealUrl}/api/submissions`,
      {
        method: 'POST',
        headers: {
          'X-Auth-Token': config.docusealApiKey as string,
          'Content-Type': 'application/json'
        },
        body: {
          template_id: config.docusealTemplateId,
          send_email: false,
          submitters: submitters.map(s => ({
            role: s.role,
            email: s.email,
            name: s.name
          }))
        }
      }
    )

    console.log('DocuSeal response:', response)

    // Return all submitter signing URLs
    return {
      submitters: response.map(submitter => ({
        role: submitter.role,
        email: submitter.email,
        name: submitter.name,
        embedUrl: submitter.embed_src,
        slug: submitter.slug,
        status: submitter.status,
        id: submitter.id
      })),
      submissionId: response[0]?.id
    }
  } catch (error: any) {
    console.error('DocuSeal API error:', error)
    console.error('Error details:', error.data)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.error || error.message || 'Failed to create submission'
    })
  }
})