import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient'> AI-Power Prompts</span>
      </h1>
      <p className='desc text-center'>
        Share promts is an open source project that allows you to discover, create and share AI-powered prompts.
      </p>

      <Feed />
    </section>
  )
}
export default Home
