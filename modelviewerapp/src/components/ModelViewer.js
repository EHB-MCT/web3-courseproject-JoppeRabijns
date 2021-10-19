import React, { Suspense, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {ContactShadows, OrbitControls} from '@react-three/drei'

import { useControls } from "leva"

import LoadAnimation from './loadAnimation'
import ModelLoader from './ModelLoader'
import Header from './header'
import Info from './info'




export default function ModelViewer(props) {  
  return (
    <Suspense fallback={<LoadAnimation />}>
    <Header title={props.title} creator={props.creator}/>
    <Info size={props.size + "kb"} vertices="test"/>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-2, 2, 4], fov: 25 }}>
        <directionalLight position={[10, 10, 0]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />
        <directionalLight position={[-10, 20, 0]} intensity={1} />
        <directionalLight position={[0, -10, 0]} intensity={0.25} />
        <Float> 
        <Rotate position-y={-0.3} scale={0.6}>
          <Suspense fallback={<LoadAnimation />}>
         <ModelLoader url={props.url}/>
         <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.15} width={10} height={10} blur={1.5} far={1.8} />
          </Suspense>
        </Rotate>
        </Float>
        <OrbitControls  enablePan={false} />
      </Canvas>    
    </Suspense>
  )
}

function Float(props){
  const ref = useRef();
  const { float } = useControls({ float: true })
   useFrame((state) => {
    if(float){
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(time / 4) / 8;
    ref.current.position.y = (1 + Math.sin(time / 1.5)) / 15;
  }
  })
  return <group ref={ref} {...props} />
}

function Rotate(props) {
  const ref = useRef();
  const { rotation } = useControls({
    rotation: {
      value: 0,
      min: 0,
      max: 100,
      step: 0.01,
    },
  })
   useFrame(() => {
    ref.current.rotation.y += Math.PI / 25000 * rotation;
  })
  return <group ref={ref} {...props} />
}
