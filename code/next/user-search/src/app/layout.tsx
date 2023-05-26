import './globals.css'
import { Space_Grotesk } from 'next/font/google'

import Header from '@/components/Header'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'User search app',
  description: 'Search for users'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <div className='h-screen bg-slate-900 grid place-content-center'>
          <div className='sm:w-[500px] md:w-[600px] lg:w-[700px]'>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
