// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { useGLTF } from '@react-three/drei'

// const Speeder = ({ ...props }) => {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/models/Speeder.glb')

//   useFrame(() => (group.current.rotation.y += 0.003))

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh geometry={nodes.Reactor_HP.geometry} material={nodes.Reactor_HP.material} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.Reactor_HP_1.geometry} material={materials.Bench} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.Reactor_HP_2.geometry} material={materials.Cooper} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.Reactor_HP_3.geometry} material={materials.BlackGadget} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.Reactor_HP_4.geometry} material={materials.Silver_THings} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.Glass_HP.geometry} material={materials['Glass 1']} rotation={[-Math.PI / 2, 0, -2.26]} />
//       <mesh geometry={nodes.BaseSpeeder_HP.geometry} material={nodes.BaseSpeeder_HP.material} rotation={[-Math.PI / 2, 0, -2.26]} />
//     </group>
//   )
// }

// useGLTF.preload('/models/Speeder.glb')

// export default Speeder