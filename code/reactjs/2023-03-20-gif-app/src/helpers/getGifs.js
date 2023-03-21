export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY ?? process.env.API_KEY}&q=${category}&limit=10`

  const response = await fetch(URL)
  const { data } = await response.json()

  const gifs = data?.map((gif) => (
    {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  ))

  return gifs
}
