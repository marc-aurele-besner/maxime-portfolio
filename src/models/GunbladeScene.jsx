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

// const GunbladeScene = ({ ...props }) => {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/models/GunbladeScene.glb')

//   useFrame(() => (group.current.rotation.y += 0.003))

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh geometry={nodes.bullet003.geometry} material={nodes.bullet003.material} position={[370.14, 432.35, 705.86]} rotation={[1.36, 0.13, 0.38]} scale={84.14} />
//       <mesh geometry={nodes.bullet004.geometry} material={nodes.bullet004.material} position={[297.76, 412.64, 684.21]} rotation={[1.36, 0.13, 0.38]} scale={84.14} />
//       <mesh geometry={nodes.bullet005.geometry} material={nodes.bullet005.material} position={[285.35, 417.93, 728.67]} rotation={[1.32, 0.28, 0.4]} scale={82.71} />
//       <mesh geometry={nodes.bullet006.geometry} material={nodes.bullet006.material} position={[339.24, 421.63, 671.48]} rotation={[1.29, 0.11, 0.39]} scale={84.14} />
//       <mesh geometry={nodes.bullet007.geometry} material={nodes.bullet007.material} position={[356.71, 441.45, 746.9]} rotation={[1.44, 0.18, 0.28]} scale={84.14} />
//       <mesh geometry={nodes.Base.geometry} material={materials.Base} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Blade.geometry} material={materials.Aluminum} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Caisson.geometry} material={materials.Caisson} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Canon.geometry} material={materials['Material #32']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Chargeur.geometry} material={materials['Material #35']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Chien.geometry} material={materials.Chien} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Grip1.geometry} material={materials.Grip1} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Grip2.geometry} material={materials.Grip2} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Gun_Frame.geometry} material={materials.Gunframe} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.HOLE.geometry} material={materials.Hole} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool10.geometry} material={nodes.subtool10.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool11.geometry} material={nodes.subtool11.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool9.geometry} material={nodes.subtool9.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Trigger.geometry} material={materials.Trigger} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool13.geometry} material={nodes.subtool13.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool12.geometry} material={nodes.subtool12.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool26.geometry} material={materials['17 - Default']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool25.geometry} material={materials['16 - Default']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool27.geometry} material={materials['24 - Default']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Lock_01.geometry} material={materials['Material #29']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Lock_02.geometry} material={materials['Material #30']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool23.geometry} material={nodes.subtool23.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool22.geometry} material={nodes.subtool22.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool21.geometry} material={nodes.subtool21.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool20.geometry} material={nodes.subtool20.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool19.geometry} material={nodes.subtool19.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool24.geometry} material={nodes.subtool24.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.subtool4.geometry} material={nodes.subtool4.material} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.u_pressure.geometry} material={materials['U-pressure']} position={[324.16, 444.16, 558.05]} rotation={[-0.25, 0.22, 0.23]} />
//       <mesh geometry={nodes.Plane_005.geometry} material={nodes.Plane_005.material} position={[-4412.45, -616.23, -3063.76]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_004.geometry} material={nodes.Plane_004.material} position={[4456.26, -613.25, 461.27]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_003.geometry} material={nodes.Plane_003.material} position={[-4.1, -610.21, 4056.15]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_008.geometry} material={nodes.Plane_008.material} position={[4410.78, -616.3, -3135.38]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_002.geometry} material={nodes.Plane_002.material} position={[-4.1, -616.3, -3135.38]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_007.geometry} material={nodes.Plane_007.material} position={[-4461.85, -610.21, 4063.12]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_006.geometry} material={nodes.Plane_006.material} position={[4452.37, -610.22, 4050.1]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Plane_001.geometry} material={nodes.Plane_001.material} position={[-4461.85, -613.25, 461.27]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.bullet.geometry} material={nodes.bullet.material} position={[342.93, -597.55, 324.32]} rotation={[3.13, -0.45, -1.48]} scale={84.14} />
//       <mesh geometry={nodes.bullet001.geometry} material={nodes.bullet001.material} position={[584.1, -600.06, 696.43]} rotation={[-0.02, 0.98, 1.64]} scale={84.14} />
//       <mesh geometry={nodes.bullet002.geometry} material={nodes.bullet002.material} position={[519, -597.55, 420.7]} rotation={[0.11, 1.5, 1.55]} scale={84.14} />
//       <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[-4.1, -613.25, 461.27]} rotation={[-1.57, 0, 0]} scale={1.17} />
//       <mesh geometry={nodes.Feather.geometry} material={nodes.Feather.material} position={[493.33, -594.84, 553.28]} rotation={[-0.29, -0.96, 2.9]} scale={5.47} />
//       <mesh geometry={nodes.Feather_1.geometry} material={nodes.Feather_1.material} position={[474.07, -587.24, 605.82]} rotation={[-2.88, -1.19, 0.38]} scale={5.47} />
//     </group>
//   )
// }

// useGLTF.preload('/models/GunbladeScene.glb')

// export default GunbladeScene