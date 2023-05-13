import { LoadingButton } from '@mui/lab'
import { Box, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`

function App () {
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error: false,
    message: ''
  })
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temperature: '',
    condition: '',
    icon: ''
  })

  const _onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError({
      error: false,
      message: ''
    })
    try {
      if (!city.trim()) throw { message: 'El campo ciudad es requerido' }
      const response = await fetch(`${API_WEATHER}${city}`)
      const data = await response.json()
      console.log(data)
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon
      })
      if (data.error) throw { message: data.error.message }
    } catch (error) {
      console.log(error)
      setError({
        error: true,
        message: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth='xs'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        height: '100vh'
      }}
      >

        <Box sx={{
          pt: 4
        }}
        >
          <Typography
            variant='h3'
            component='h1'
            align='center'
            gutterBottom
          >
            Weather Finder
          </Typography>
          <Box
            sx={{ display: 'grid', gap: 2 }}
            component='form'
            autoComplete='off'
            onSubmit={_onSubmit}
          >
            <TextField
              id='city'
              label='Ciudad'
              variant='outlined'
              size='small'
              fullWidth
              value={city}
              error={error.error}
              helperText={error.message}
              onChange={(e) => setCity(e.target.value)}
            />

            <LoadingButton
              type='submit'
              variant='contained'
              loading={loading}
              loadingIndicator='Buscando...'
            >
              Buscar
            </LoadingButton>
          </Box>

          {
            weather.city && (
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant='h4'
                  component='h2'
                  gutterBottom
                >
                  {weather.city}, {weather.country}
                </Typography>
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                >
                  {weather.temperature} °C
                </Typography>
                <Typography
                  variant='h6'
                  component='h4'
                  gutterBottom
                >
                  {weather.condition}
                </Typography>
                <img
                  src={weather.icon}
                  alt={weather.condition}
                  width='48'
                />
              </Box>
            )
          }
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', pb: 4
        }}
        >
          <Typography
            textAlign='center'
            sx={{ fontSize: '10px' }}
          >
            Powered by:{' '}
            <a
              href='https://www.weatherapi.com/'
              title='Free Weather API'
            >
              WeatherAPI.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
export default App
