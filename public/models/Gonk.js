import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Gonk.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 259.8, 31.68]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Gonk_1.geometry} material={materials.DefaultMaterial} />
        <mesh geometry={nodes.Gonk_2.geometry} material={materials['Glass 1']} />
        <mesh geometry={nodes.Gonk_3.geometry} material={materials['07 - Default']} />
        <mesh geometry={nodes.Gonk_4.geometry} material={materials['08 - Default']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Gonk.glb')
