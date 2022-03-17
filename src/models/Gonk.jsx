// import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Gonk = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Gonk.glb')

  useFrame(() => (group.current.rotation.y += 0.003))

  return (
    <group 
      ref={group} {...props} dispose={null}>
      <group position={[0, -136.7, 32.09]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.41, 396.5]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.Gonk_2.geometry} material={materials.DefaultMaterial} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Gonk.glb')

export default Gonk