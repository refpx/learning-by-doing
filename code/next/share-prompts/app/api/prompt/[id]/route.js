import { connectToDatabase } from '@utils/database'
import Prompt from '@models/prompt'

// GET
export const GET = async (request, { params }) => {
  try {
    await connectToDatabase()

    const prompt = await Prompt.findById(params.id).populate('creator')

    if (!prompt) return new Response('Prompt not found', { status: 404 })

    return new Response(JSON.stringify(prompt), {
      status: 200
    })
  } catch (error) {
    return new Response('Failed to fetch the prompt', {
      status: 500
    })
  }
}

// PATCH
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json()

  try {
    await connectToDatabase()

    const exitingPrompt = await Prompt.findById(params.id)

    if (!exitingPrompt) return new Response('Prompt not found', { status: 404 })

    exitingPrompt.prompt = prompt
    exitingPrompt.tag = tag

    await exitingPrompt.save()

    return new Response(JSON.stringify(exitingPrompt), {
      status: 200
    })
  } catch (error) {
    return new Response('Failed to update the prompt', {
      status: 500
    })
  }
}

// DELETE
export const DELETE = async (request, { params }) => {
  try {
    await connectToDatabase()

    await Prompt.findByIdAndRemove(params.id)

    return new Response('Prompt deleted successfully', {
      status: 200
    })
  } catch (error) {
    return new Response('Failed to delete the prompt', {
      status: 500
    })
  }
}
