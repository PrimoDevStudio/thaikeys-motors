// File: server/api/upload/video.post.js
export default defineEventHandler(async (event) => {
  try {
    console.log('=== VIDEO UPLOAD DEBUG START (STREAM API) ===')
    
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

    // Check file size (200MB limit)
    if (file.data.length > 200 * 1024 * 1024) {
      console.log('ERROR: File too large:', file.data.length, 'bytes')
      throw createError({
        statusCode: 413,
        statusMessage: 'File too large. Maximum size is 200MB.'
      })
    }

    // Debug: Check config
    const config = useRuntimeConfig()
    console.log('Config debug:', {
      streamApiKey: !!config.bunnyStreamApiKey,
      streamLibraryId: config.bunnyStreamLibraryId,
      cdnUrl: config.public.bunnyCdnUrl
    })

    const streamApiKey = config.bunnyStreamApiKey
    const libraryId = config.bunnyStreamLibraryId

    // Generate unique video title
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2, 15)
    const videoTitle = `Property Video ${timestamp}-${randomId}`

    console.log('Generated video title:', videoTitle)

    // Step 1: Create video entry in Stream API
    console.log('Creating video entry in Stream API...')
    const createVideoResponse = await fetch(`https://video.bunnycdn.com/library/${libraryId}/videos`, {
      method: 'POST',
      headers: {
        'AccessKey': streamApiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: videoTitle
      })
    })

    console.log('Create video response:', {
      status: createVideoResponse.status,
      statusText: createVideoResponse.statusText,
      ok: createVideoResponse.ok
    })

    if (!createVideoResponse.ok) {
      console.log('ERROR: Failed to create video entry')
      throw createError({
        statusCode: createVideoResponse.status,
        statusMessage: `Failed to create video entry: ${createVideoResponse.statusText}`
      })
    }

    const videoData = await createVideoResponse.json()
    console.log('Video created with ID:', videoData.guid)

    // Step 2: Upload video file
    console.log('Uploading video file...')
    const uploadResponse = await fetch(`https://video.bunnycdn.com/library/${libraryId}/videos/${videoData.guid}`, {
      method: 'PUT',
      headers: {
        'AccessKey': streamApiKey,
        'Content-Type': file.type || 'video/mp4'
      },
      body: file.data
    })

    console.log('Upload response:', {
      status: uploadResponse.status,
      statusText: uploadResponse.statusText,
      ok: uploadResponse.ok
    })

    if (!uploadResponse.ok) {
      console.log('ERROR: Failed to upload video file')
      throw createError({
        statusCode: uploadResponse.status,
        statusMessage: `Failed to upload video: ${uploadResponse.statusText}`
      })
    }

    // Step 3: Get video info for URLs
    console.log('Getting video info...')
    const videoInfoResponse = await fetch(`https://video.bunnycdn.com/library/${libraryId}/videos/${videoData.guid}`, {
      method: 'GET',
      headers: {
        'AccessKey': streamApiKey
      }
    })

    if (videoInfoResponse.ok) {
      const videoInfo = await videoInfoResponse.json()
      console.log('Video info retrieved:', {
        guid: videoInfo.guid,
        status: videoInfo.status,
        length: videoInfo.length
      })

      // Generate URLs (corrected formats)
      const videoUrl = `https://vz-${libraryId}.b-cdn.net/${videoData.guid}/playlist.m3u8` // HLS stream
      const embedUrl = `https://iframe.mediadelivery.net/play/${libraryId}/${videoData.guid}` // Correct embed URL
      const thumbnailUrl = `https://vz-${libraryId}.b-cdn.net/${videoData.guid}/thumbnail.jpg`
      
      console.log('Success! Video URLs generated')
      console.log('Video Stream URL:', videoUrl)
      console.log('Embed URL:', embedUrl)
      console.log('Thumbnail URL:', thumbnailUrl)
      console.log('=== VIDEO UPLOAD DEBUG END ===')
      
      return {
        success: true,
        videoId: videoData.guid,
        url: embedUrl, // Use correct embed URL
        streamUrl: videoUrl, // HLS stream URL
        thumbnailUrl: thumbnailUrl,
        fileName: file.filename,
        originalSize: file.data.length,
        processedSize: videoInfo.storageSize || null,
        duration: videoInfo.length || null,
        status: videoInfo.status
      }
    } else {
      // Fallback if we can't get video info
      const embedUrl = `https://iframe.mediadelivery.net/play/${libraryId}/${videoData.guid}`
      
      return {
        success: true,
        videoId: videoData.guid,
        url: embedUrl,
        fileName: file.filename,
        originalSize: file.data.length
      }
    }

  } catch (error) {
    console.error('=== VIDEO UPLOAD ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    console.error('=== VIDEO UPLOAD ERROR END ===')
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Video upload failed'
    })
  }
})