import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import { ResizeObserver } from '@juggle/resize-observer'

import Gonk from '../models/Gonk'

const Gallery3D = ({
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
            <color attach="background" args={['#191920']} />
              <ambientLight intensity={0.05} />


          <spotLight
            color="#FFFFFF"
            position={[0, 100, 75]}
            angle={0.25}
            intensity={0.75}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
          />     
              
          <spotLight
            color="#FFFFFF"
            position={[0, 100, -75]}
            angle={0.25}
            intensity={0.75}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
          /> 
          <Gonk 
            position={new THREE.Vector3(0, 20, 0)} 
            rotation={new THREE.Euler(0, 0, 0)}
            scale={new THREE.Vector3(0.02, 0.02, 0.02)}
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 5]}>
            <planeGeometry args={[200, 200]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={60}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#151515"
              metalness={0.5}
            />
          </mesh>

          <spotLight
            color="#FFFFFF"
            position={[0, 50, 25]}
            angle={0.25}
            intensity={0.5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
          />     
              
          <spotLight
            color="#FFFFFF"
            position={[0, 50, -25]}
            angle={0.25}
            intensity={0.5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
          /> 
          <OrbitControls maxPolarAngle={Math.PI / 2 - 0.025} minPolarAngle={0} makeDefault />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Gallery3D