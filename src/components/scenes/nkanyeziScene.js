'use client'
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Nkanyezi from "../threeDModels/nkanyezi";

export default function NkanyeziScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 0.5, 2.5], fov: 50 }}
      gl={{ antialias: true }}
    >
      {/* Background fog */}
      <fog attach="fog" args={["#07090f", 0, 20]} />

      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight
        intensity={0.5}
        position={[1, 5, 2]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Scene Controls */}
      <ScrollControls damping={0.1} pages={2}>
        <Nkanyezi position={[0, -1, 0]} scale={0.01} />
      </ScrollControls>
      <OrbitControls />
    </Canvas>
  );
}
