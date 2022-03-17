import * as THREE from 'three'
import { useRef } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { SpotLight, useDepthBuffer } from "@react-three/drei"

function MovingSpot({ target, vec = new THREE.Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 20 + target.x, target.y, target.z - 0.5), 0.1)
    light.current.target.updateMatrixWorld()
  })
  
  return <SpotLight castShadow ref={light} penumbra={0.5} distance={6} angle={0.5} attenuation={5} anglePower={4} intensity={10} {...props} />
}

const DynamicLight = ({
  color,
  position,
  target
}) => {
  const depthBuffer = useDepthBuffer({ frames: 1 })

  return (
    <group>
          <MovingSpot depthBuffer={depthBuffer} color={color} position={position} target={target} />
    </group>
  )
}

export default DynamicLight