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
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} color="#ffb380" />
            <directionalLight position={[10, 10, 5]} intensity={0.6} />
            <directionalLight position={[-5, 5, -5]} intensity={0.3} />
            <Model />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeD;
