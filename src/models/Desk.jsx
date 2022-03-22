import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Desk = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Desk.glb')

  useFrame(() => (group.current.rotation.y += 0.003))

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[28.67, -28.12, -56.28]}>
        <mesh geometry={nodes.Desk_1.geometry} material={materials['1001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Desk.glb')

export default Desk