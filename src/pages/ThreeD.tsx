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
            <ambientLight intensity={0.12} color="#fff5e6" />
            <directionalLight 
              position={[2, 15, 2]} 
              intensity={1.2} 
              color="#ffd699"
              castShadow
            />
            <directionalLight 
              position={[-3, 8, -5]} 
              intensity={0.2} 
              color="#ffe4b3"
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
