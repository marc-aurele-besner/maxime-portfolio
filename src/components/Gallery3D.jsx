import * as THREE from 'three'
import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'

// import Gonk from '../models/Gonk'
// import Desk from '../models/Desk'
// import Gunblade from '../models/Gunblade'
// import GunbladeScene from '../models/GunbladeScene'

const Gonk = lazy(() => import('../models/Gonk'))
const Desk = lazy(() => import('../models/Desk'))
const Gunblade = lazy(() => import('../models/Gunblade'))
const GunbladeScene = lazy(() => import('../models/GunbladeScene'))

const Gallery3D = ({
  galleryId,
  idEmbeded
}) => {

  const mql = window.matchMedia("(orientation: portrait)")
  let startCameraPosition = new THREE.Vector3(0, 50, 35)
  let startCameraFov = 80
  // If there are matches, we're in portrait
  if(mql.matches) {  
    startCameraPosition = new THREE.Vector3(0, 50, 45)
    startCameraFov = 130
  }

  if(idEmbeded) {
    startCameraPosition = new THREE.Vector3(0, 60, 35)
    startCameraFov = 90
    if(mql.matches) {  
      startCameraPosition = new THREE.Vector3(0, 60, 45)
      startCameraFov = 130
    }
  }

  return (
    <div className={idEmbeded ? "embeded" : "main"}>
      <Canvas 
        gl={{ alpha: false }} 
        dpr={[1, 1.5]} 
        camera={{ fov: startCameraFov, position: startCameraPosition }}
        resize={{ polyfill: ResizeObserver }}>
        <Suspense fallback={null}>
            <color attach="background" args={['#463f32']} />
            <ambientLight intensity={0.05} />
            <spotLight
              color="#FFFFFF"
              position={[0, 100, 75]}
              angle={0.35}
              intensity={0.75}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.00001}
              castShadow
            />     
            <spotLight
              color="#FFFFFF"
              position={[0, 100, -75]}
              angle={0.35}
              intensity={0.75}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.00001}
              castShadow
            /> 
            {(!galleryId || galleryId === 'Gonk') && (
              <Gonk 
                position={new THREE.Vector3(0, 10, 0)} 
                rotation={new THREE.Euler(0, 0, 0)}
                scale={new THREE.Vector3(0.02, 0.02, 0.02)}
              />
            )}
            {galleryId === 'Desk' && (
              <Desk 
                position={new THREE.Vector3(0, 10, 0)} 
                rotation={new THREE.Euler(0, 0, 0)}
                scale={new THREE.Vector3(0.5, 0.5, 0.5)}
              />
            )}
            {galleryId === 'Gunblade' && (
              <Gunblade 
                position={new THREE.Vector3(0, 10, 0)} 
                rotation={new THREE.Euler(0, 0, 0)}
                scale={new THREE.Vector3(0.02, 0.02, 0.02)}
              />
            )}
            {galleryId === 'GunbladeScene' && (
              <GunbladeScene 
                position={new THREE.Vector3(0, 10, 0)} 
                rotation={new THREE.Euler(0, 0, 0)}
                scale={new THREE.Vector3(0.02, 0.02, 0.02)}
              />
            )}
            <OrbitControls maxPolarAngle={Math.PI / 2 - 0.025} minPolarAngle={0} makeDefault />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Gallery3D