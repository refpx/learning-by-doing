import '@styles/global.css'

export const metadata = {
  title: 'Share Prompts',
  description: 'A place to share your writing prompts and get inspired by others.'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
          <main className='app'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
export default RootLayout
