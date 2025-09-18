'use client'
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Nkanyezi(props) {
  const group = useRef();

  // Load GLTF model + animations
  const { scene, animations } = useGLTF("/jump-transformed.glb");
  const { actions } = useAnimations(animations, group);

  // Play "jump" animation when mounted
  useEffect(() => {
    const action = actions?.jump;
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Preload model for performance
useGLTF.preload("/jump-transformed.glb");
