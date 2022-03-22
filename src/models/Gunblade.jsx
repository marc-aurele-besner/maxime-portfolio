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



// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { useGLTF } from '@react-three/drei'

// const Gunblade = ({ ...props }) => {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/models/Gunblade.glb')

//   useFrame(() => (group.current.rotation.y += 0.003))
  
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh geometry={nodes.bullet003.geometry} material={nodes.bullet003.material} position={[751.49, 452.04, 255.85]} rotation={[-2.31, -1.46, -1.69]} scale={84.14} />
//       <mesh geometry={nodes.bullet004.geometry} material={nodes.bullet004.material} position={[748.05, 410.33, 189.93]} rotation={[-2.31, -1.46, -1.69]} scale={84.14} />
//       <mesh geometry={nodes.bullet005.geometry} material={nodes.bullet005.material} position={[750.8, 450.58, 166.88]} rotation={[-1.24, -1.4, -0.61]} scale={82.71} />
//       <mesh geometry={nodes.bullet006.geometry} material={nodes.bullet006.material} position={[750.44, 409.83, 234.17]} rotation={[-2.22, -1.38, -1.6]} scale={84.14} />
//       <mesh geometry={nodes.bullet007.geometry} material={nodes.bullet007.material} position={[758.52, 489.33, 233.34]} rotation={[-2.05, -1.55, -1.52]} scale={84.14} />
//       <mesh geometry={nodes.Base.geometry} material={materials.Base} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Blade.geometry} material={materials.Aluminum} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Caisson.geometry} material={materials.Caisson} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Canon.geometry} material={materials['Material #32']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Chargeur.geometry} material={materials['Material #35']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Chien.geometry} material={materials.Chien} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Grip1.geometry} material={materials.Grip1} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Grip2.geometry} material={materials.Grip2} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Gun_Frame.geometry} material={materials.Gunframe} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.HOLE.geometry} material={materials.Hole} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool10.geometry} material={nodes.subtool10.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool11.geometry} material={nodes.subtool11.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool9.geometry} material={nodes.subtool9.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Trigger.geometry} material={materials.Trigger} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool13.geometry} material={nodes.subtool13.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool12.geometry} material={nodes.subtool12.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool26.geometry} material={materials['17 - Default']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool25.geometry} material={materials['16 - Default']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool27.geometry} material={materials['24 - Default']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Lock_01.geometry} material={materials['Material #29']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.Lock_02.geometry} material={materials['Material #30']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool23.geometry} material={nodes.subtool23.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool22.geometry} material={nodes.subtool22.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool21.geometry} material={nodes.subtool21.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool20.geometry} material={nodes.subtool20.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool19.geometry} material={nodes.subtool19.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool24.geometry} material={nodes.subtool24.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.subtool4.geometry} material={nodes.subtool4.material} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//       <mesh geometry={nodes.u_pressure.geometry} material={materials['U-pressure']} position={[787.33, 300.99, 254.02]} rotation={[-1.58, 0.09, -1.56]} />
//     </group>
//   )
// }

// useGLTF.preload('/models/Gunblade.glb')

// export default Gunblade