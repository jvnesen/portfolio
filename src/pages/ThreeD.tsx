import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
  const { scene } = useGLTF("/models/updatedvisproject.glb");
  return <primitive object={scene} />;
};

const ThreeD = () => {
  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <div className="w-full h-[calc(100vh-6rem)] rounded-lg overflow-hidden bg-muted/20">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 50 }}
          gl={{ antialias: true, toneMapping: 0 }}
        >
          <color attach="background" args={["#ffffff"]} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.08} color="#ffcc99" />
            <directionalLight 
              position={[3, 14, 2]} 
              intensity={0.7} 
              color="#ff9966"
              castShadow
            />
            <directionalLight 
              position={[-4, 10, -3]} 
              intensity={0.15} 
              color="#ffb380"
            />
            <Model />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeD;
