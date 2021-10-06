import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {ContactShadows, Html, useProgress, OrbitControls} from '@react-three/drei'

import { useControls } from "leva"

import ModelLoader from './components/ModelLoader'
import Header from './components/header'
import Info from './components/info'

const style = {
  height: '100vh',
};

function Loader() {
  const  { progress } = useProgress();

  return <Html className="loader" center>{Math.round(progress)} % ingeladen</Html>  
  
}


export default function App() {
  return (
    <Suspense>
    <Header title="Finalshow" creator="Joppe Rabijns"/>
    <Info/>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-2, 2, 4], fov: 25 }} style={style}>
        <directionalLight position={[10, 10, 0]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />
        <directionalLight position={[-10, 20, 0]} intensity={1} />
        <directionalLight position={[0, -10, 0]} intensity={0.25} />
        <Float> 
        <Rotate position-y={-0.2} scale={0.8}>
          <Suspense fallback={<Loader />}>
         <ModelLoader url="/FinalRoom.glb"/>
         <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.15} width={10} height={10} blur={1.5} far={1.8} />
          </Suspense>
        </Rotate>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </Suspense>
  )
}


function Float(props){
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 15;
  })
  return <group ref={ref} {...props} />
}

function Rotate(props) {
  const ref = useRef();
  const { rotation } = useControls({
    rotation: {
      value: 50,
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
