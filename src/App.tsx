import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home'

const Gallery = lazy(() => import('./views/Gallery'))

const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:galleryId" element={<Gallery />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default React.memo(App)