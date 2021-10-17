import {Html, useProgress} from '@react-three/drei'

function LoadAnimation() {
  const  { progress } = useProgress();

  return <Html className="loader" center>{Math.round(progress)} % ingeladen</Html>  
}

export default LoadAnimation;