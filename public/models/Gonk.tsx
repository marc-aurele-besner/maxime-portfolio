import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Gonk_2: THREE.Mesh
  }
  materials: {
    DefaultMaterial: THREE.MeshBasicMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Gonk.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -136.7, 32.09]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.41, 396.5]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.Gonk_2.geometry} material={materials.DefaultMaterial} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Gonk.glb')
