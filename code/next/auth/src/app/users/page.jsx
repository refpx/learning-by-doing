import { createClient } from '@supabase/supabase-js'

const page = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      db: {
        schema: 'next_auth'
      }
    }
  )

  const { data } = await supabase.from('users').select('name, email')

  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default page
