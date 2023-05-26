import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectToDatabase } from '@utils/database'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session ({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email })
      session.user.id = sessionUser._id.toString()

      return session
    },
    async signIn ({ profile }) {
      try {
        await connectToDatabase()

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email })

        // if not, create user
        if (!userExists) {
          const user = await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture
          })

          if (!user) {
            throw new Error('Error creating user')
          }
        }

        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
