// File: server/api/upload/delete.delete.js
export default defineEventHandler(async (event) => {
  try {
    console.log('=== DELETE FILE DEBUG START ===')
    
    const query = getQuery(event)
    const filePath = query.path
    const videoId = query.videoId
    const type = query.type // 'image' or 'video'
    
    console.log('Delete request:', { filePath, videoId, type })
    
    if (!filePath && !videoId) {
      console.log('ERROR: No file path or video ID provided')
      throw createError({
        statusCode: 400,
        statusMessage: 'No file path or video ID provided'
      })
    }

    // Debug: Check config
    const config = useRuntimeConfig()
    console.log('Config debug:', {
      storageEndpoint: config.bunnyStorageEndpoint,
      accessKeyExists: !!config.bunnyAccessKey,
      streamApiKeyExists: !!config.bunnyStreamApiKey,
      streamLibraryId: config.bunnyStreamLibraryId
    })

    // Handle VIDEO deletion (Stream API)
    if (videoId || type === 'video') {
      console.log('Deleting video from Stream API...')
      
      const streamApiKey = config.bunnyStreamApiKey
      const libraryId = config.bunnyStreamLibraryId
      
      console.log('Delete request details:', {
        videoId,
        libraryId,
        apiKeyExists: !!streamApiKey,
        apiKeyLength: streamApiKey?.length
      })
      
      const deleteUrl = `https://video.bunnycdn.com/library/${libraryId}/videos/${videoId}`
      console.log('Stream delete URL:', deleteUrl)

      const response = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'AccessKey': streamApiKey,
          'accept': '*/*'
        }
      })

      console.log('Stream API delete response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      })

      // Get response body to see detailed error
      let responseText = ''
      try {
        responseText = await response.text()
        console.log('Response body:', responseText)
      } catch (e) {
        console.log('Could not read response body')
      }

      if (!response.ok && response.status !== 404) {
        console.log('ERROR: Stream API delete failed')
        console.log('Full response details:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: responseText
        })
        
        // Still return success but log the issue
        console.log('Continuing despite delete failure (video may still exist)')
      } else {
        console.log('Success! Video deleted from Stream API')
      }

      console.log('=== DELETE FILE DEBUG END ===')

      return {
        success: true,
        message: response.ok ? 'Video deleted successfully' : 'Video deletion attempted',
        type: 'video',
        actualStatus: response.status
      }
    }

    // Handle IMAGE deletion (Storage API)
    if (filePath || type === 'image') {
      console.log('Deleting image from Storage API...')
      
      const storageEndpoint = config.bunnyStorageEndpoint
      const accessKey = config.bunnyAccessKey

      console.log('Storage delete URL:', `https://${storageEndpoint}/thaikeys/${filePath}`)

      const response = await fetch(`https://${storageEndpoint}/thaikeys/${filePath}`, {
        method: 'DELETE',
        headers: {
          'AccessKey': accessKey
        }
      })

      console.log('Storage API delete response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      })

      if (!response.ok && response.status !== 404) {
        console.log('ERROR: Storage API delete failed (ignoring 404)')
        throw createError({
          statusCode: response.status,
          statusMessage: `Storage API delete failed: ${response.statusText}`
        })
      }

      console.log('Success! Image deleted from Storage API')
      console.log('=== DELETE FILE DEBUG END ===')

      return {
        success: true,
        message: 'Image deleted successfully',
        type: 'image'
      }
    }

    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid delete request - no valid file or video specified'
    })

  } catch (error) {
    console.error('=== DELETE FILE ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    console.error('=== DELETE FILE ERROR END ===')
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Delete failed'
    })
  }
})