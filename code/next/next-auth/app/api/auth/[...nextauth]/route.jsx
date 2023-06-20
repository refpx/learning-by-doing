import NextAuth from 'next-auth/next'
import prisma from '@app/libs/prismadb'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Username', type: 'text', placeholder: 'John Smith' }
      },
      async authorize (credentials) {
        const user = { id: 1, name: 'Brett', email: 'brett@gmail.com' }
        return user
      }
    })
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
