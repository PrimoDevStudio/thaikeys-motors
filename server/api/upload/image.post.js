// File: server/api/upload/image.post.js
export default defineEventHandler(async (event) => {
  try {
    console.log('=== IMAGE UPLOAD DEBUG START ===')
    
    // Debug: Check form data
    const form = await readMultipartFormData(event)
    console.log('Form data received:', form?.length, 'items')
    
    const file = form?.find(item => item.name === 'file')
    console.log('File found:', !!file)
    console.log('File details:', {
      name: file?.name,
      filename: file?.filename,
      type: file?.type,
      size: file?.data?.length
    })
    
    if (!file) {
      console.log('ERROR: No file provided')
      throw createError({
        statusCode: 400,
        statusMessage: 'No file provided'
      })
    }

    // Debug: Check config
    const config = useRuntimeConfig()
    console.log('Config debug:', {
      storageEndpoint: config.bunnyStorageEndpoint,
      accessKeyExists: !!config.bunnyAccessKey,
      accessKeyLength: config.bunnyAccessKey?.length || 0,
      cdnUrl: config.public.bunnyCdnUrl
    })

    const storageEndpoint = config.bunnyStorageEndpoint
    const accessKey = config.bunnyAccessKey
    const cdnUrl = config.public.bunnyCdnUrl

    // Generate unique filename
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.filename?.split('.').pop() || 'jpg'
    const fileName = `property-${timestamp}-${randomId}.${fileExtension}`
    const filePath = `properties/images/${fileName}`

    console.log('Generated file path:', filePath)
    console.log('Full upload URL:', `https://${storageEndpoint}/thaikeys/${filePath}`)

    // Upload to BunnyCDN (include storage zone name)
    console.log('Starting BunnyCDN upload...')
    const response = await fetch(`https://${storageEndpoint}/thaikeys/${filePath}`, {
      method: 'PUT',
      headers: {
        'AccessKey': accessKey,
        'Content-Type': file.type || 'image/jpeg'
      },
      body: file.data
    })

    console.log('BunnyCDN response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok
    })

    if (!response.ok) {
      console.log('ERROR: BunnyCDN upload failed')
      throw createError({
        statusCode: response.status,
        statusMessage: `BunnyCDN upload failed: ${response.statusText}`
      })
    }

    // Return the public URL
    const publicUrl = `${cdnUrl}/${filePath}`
    console.log('Success! Public URL:', publicUrl)
    console.log('=== IMAGE UPLOAD DEBUG END ===')
    
    return {
      success: true,
      url: publicUrl,
      fileName: fileName,
      path: filePath,
      size: file.data.length
    }

  } catch (error) {
    console.error('=== IMAGE UPLOAD ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    console.error('=== IMAGE UPLOAD ERROR END ===')
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Upload failed'
    })
  }
})