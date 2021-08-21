import util from 'util'
import { exec } from 'child_process'
import fs from 'fs'

const execPromise = util.promisify(exec)

const generateFramesFromUrl = async (url: string, id: string) => {
  try {
    let createDirResult = await execPromise(`mkdir tmp\\${id}`)

    let generateImageResult = await execPromise(`ffmpeg -i "${url}" -r 30 tmp\\${id}\\out%03d.jpg`)

    let frames = []

    fs.readdirSync(`tmp\\${id}\\`).forEach(file => {
      let base64 = fs.readFileSync(`tmp\\${id}\\${file}`, 'base64')

      frames.push(base64)
    })

    fs.rmSync(`tmp\\${id}`, { recursive: true })

    return frames
  } catch (error) {
    return {status: 'error', ...error}
  }
} 

export {
  generateFramesFromUrl
}