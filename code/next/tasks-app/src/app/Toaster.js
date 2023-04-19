'use client'

import dynamic from 'next/dynamic'

export const Toaster = dynamic(
  async () => {
    const { Toaster } = await import('sonner')
    return Toaster
  },
  {
    ssr: false,
  }
)
