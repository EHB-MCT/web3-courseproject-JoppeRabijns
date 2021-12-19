import React from 'react'
import { useGLTF} from '@react-three/drei'
import { useControls } from "leva"


function ModelLoader({ url, ...props }) {
  const { scale } = useControls({
    scale: {
      value:1.01,
      min: 0,
      max: 3,
      step: 0.1,
    },
  })
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} scale={scale}/>
}

export default ModelLoader;