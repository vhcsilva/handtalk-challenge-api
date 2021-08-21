import express from 'express'
import { generateFramesFromUrl } from '../services/ffmpeg'

const router = express.Router()

router.post('/api/frames', async (request, response) => {
  try {
    let id = request.body.videoId
    let url = request.body.videoUrl

    if (!id || !url) {
      response.send({
        status: false,
        message: 'No video information provided'
      })
    } else {
      let frames = await generateFramesFromUrl(url, id)

      response.send({
        status: 'success',
        data: frames
      })
    }
  } catch(error) {
    console.log(error)
    response.status(500).send(error)
  }
})

export default router