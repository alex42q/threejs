import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/delonghi_kettle.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.kettle} position={[-0.99, 1, -4.33]} rotation={[0, 0.07, 0]} scale={0.13} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.kettle} position={[-0.84, 0.99, -4.34]} rotation={[0, 0.07, 0.07]} scale={0.13} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.kettle} position={[-0.84, 0.99, -4.34]} rotation={[0, 0.07, 0.07]} scale={0.13} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.kettle} position={[-1.02, 1.16, -4.33]} rotation={[0, 0.07, 0]} scale={0.13} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.kettle} position={[-1.07, 1.11, -4.33]} rotation={[-Math.PI, 1.5, Math.PI / 2]} scale={0.13} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['kettle.001']} position={[-0.84, 0.99, -4.34]} rotation={[0, 0.07, 0.07]} scale={0.13} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.kettle} position={[-0.9, 0.95, -4.34]} rotation={[0, 0.07, 0.2]} scale={0.13} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.kettle} position={[-0.99, 1, -4.33]} rotation={[0, 0.07, 0]} scale={0.13} />
    </group>
  )
}

useGLTF.preload('/delonghi_kettle.glb')
