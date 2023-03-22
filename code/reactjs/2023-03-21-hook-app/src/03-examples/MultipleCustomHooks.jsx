import { LoadingQuote } from '../components/LoadingQuote'
import { Quote } from '../components/Quote'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Multiple Custom Hooks</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }

      <button
        disabled={isLoading}
        className='btn btn-primary'
        onClick={() => increment()}
      >
        Next Quote
      </button>

    </>
  )
}
