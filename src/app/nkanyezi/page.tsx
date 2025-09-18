"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Dynamically import Nkanyezi to avoid SSR issues
const NkanyeziScene = dynamic(() => import("@/components/threeDModels/nkanyezi"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <NkanyeziScene />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Page;
