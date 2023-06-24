import prisma from '@lib/prisma'
import * as bcrypt from 'bcrypt'

export async function POST (request) {
  const body = await request.json()
  const user = await prisma.user.findFirst({
    where: {
      email: body.email
    }
  })

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user
    return new Response(JSON.stringify(userWithoutPassword))
  } else return new Response(JSON.stringify(null))
}
