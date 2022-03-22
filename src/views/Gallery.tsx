import React, { Suspense } from 'react'
import { useParams } from "react-router-dom";

import Gallery3D from '../components/Gallery3D'


const Gallery: React.FC = () => {
  const { galleryId } = useParams(); // galleryId={galleryId} 
  return (
    <Suspense fallback={null}>
      <Gallery3D galleryId={galleryId} idEmbeded={false} />
    </Suspense>
  )
}

export default Gallery
