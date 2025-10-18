// File: server/api/upload/video-status.get.js
export default defineEventHandler(async (event) => {
  try {
    console.log('=== VIDEO STATUS CHECK START ===')
    
    const query = getQuery(event)
    const videoId = query.videoId
    
    console.log('Checking status for video ID:', videoId)
    
    if (!videoId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Video ID is required'
      })
    }

    // Get config
    const config = useRuntimeConfig()
    const streamApiKey = config.bunnyStreamApiKey
    const libraryId = config.bunnyStreamLibraryId
    
    console.log('Config check:', {
      libraryId,
      apiKeyExists: !!streamApiKey
    })

    // Get video info from BunnyCDN Stream API
    const videoInfoUrl = `https://video.bunnycdn.com/library/${libraryId}/videos/${videoId}`
    console.log('Fetching video info from:', videoInfoUrl)

    const response = await fetch(videoInfoUrl, {
      method: 'GET',
      headers: {
        'AccessKey': streamApiKey,
        'accept': 'application/json'
      }
    })

    console.log('Stream API response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok
    })

    if (!response.ok) {
      console.log('ERROR: Failed to get video info')
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to get video info: ${response.statusText}`
      })
    }

    const videoInfo = await response.json()
    console.log('Video info:', {
      guid: videoInfo.guid,
      status: videoInfo.status,
      length: videoInfo.length,
      storageSize: videoInfo.storageSize
    })

    // BunnyCDN Stream status codes:
    // 0 = Queued
    // 1 = Processing 
    // 2 = Encoding
    // 3 = Finished (ready)
    // 4 = Error
    // 5 = Timed out

    const statusMap = {
      0: 'Queued',
      1: 'Processing',
      2: 'Encoding', 
      3: 'Finished',
      4: 'Error',
      5: 'Timed out'
    }

    console.log(`Video status: ${videoInfo.status} (${statusMap[videoInfo.status] || 'Unknown'})`)
    console.log('=== VIDEO STATUS CHECK END ===')

    return {
      success: true,
      videoId: videoInfo.guid,
      status: videoInfo.status,
      statusText: statusMap[videoInfo.status] || 'Unknown',
      duration: videoInfo.length,
      storageSize: videoInfo.storageSize,
      isReady: videoInfo.status === 3
    }

  } catch (error) {
    console.error('=== VIDEO STATUS CHECK ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error.message)
    console.error('=== VIDEO STATUS CHECK ERROR END ===')
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to check video status'
    })
  }
})