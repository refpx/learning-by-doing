import { Routes, Navigate, Route } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export function HeroesRoutes () {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />

          <Route path='search' element={<SearchPage />} />
          <Route path='hero' element={<HeroPage />} />

          <Route path='/*' element={<Navigate to='marvel' />} />
        </Routes>
      </div>
    </>
  )
}
