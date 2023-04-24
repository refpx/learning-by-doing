import Main from './components/main'

function App() {
  const url = import.meta.env.VITE_BASE_URL
  return (
    <>
      <Main url={url} />
    </>
  )
}
export default App
