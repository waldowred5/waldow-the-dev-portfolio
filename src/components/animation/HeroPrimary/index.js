import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

// eslint-disable-next-line react/prop-types
export const HeroPrimary = ({ beta, gamma }) => {
  const mesh = useRef();
  useThree(({ camera }) => {
    camera.position.set(-7.5, 0, 0);
  });
  useFrame(() => {
    mesh.current.rotation.x = 0;
    mesh.current.rotation.y = gamma;
    mesh.current.rotation.z = beta;
  });

  return (
    <>
      <mesh
        ref={mesh}
        rotation={[60, 0, 0]}
      >
        <octahedronGeometry args={[2, 0]}/>
        <meshLambertMaterial color={0xFFFFFF} />
      </mesh>
    </>
  );
};
