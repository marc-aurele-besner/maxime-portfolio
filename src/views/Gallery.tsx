// import * as THREE from 'three'
import React, { Suspense } from 'react'
// import { useParams } from "react-router-dom";
// import { useLoader } from '@react-three/fiber'

import Gallery3D from '../components/Gallery3D'


const Gallery: React.FC = () => {
  // const { galleryId } = useParams(); // galleryId={galleryId} 
  return (
    <Suspense fallback={null}>
      <Gallery3D idEmbeded={false} />
    </Suspense>
  )
}

export default Gallery
