import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ControlsTrackball } from 'components/animation/ControlsTrackball';
import { HeroPrimary } from 'components/animation/HeroPrimary';
import { PointLight } from 'components/animation/LightPoint';
import { HeroSecondary } from 'components/animation/HeroSecondary';
import CanvasContainer from 'components/animation/HeroPrimary/styles';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const HeroCanvas = ({ lights, trigPaths }) => {
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  const getAccel = () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', (event) => {
                setAlpha(event.alpha / 180);
                setBeta(event.beta / -45);
                setGamma(event.gamma / -45);
              });
            }
          })
          .catch(console.error);
    }
  };

  return (
    <>
      <CanvasContainer>
        <Canvas>
          <ControlsTrackball />
          {
            lights.map((light, index) => {
              return (
                <PointLight
                  key={index}
                  color={light.color}
                  position={light.position}
                />
              );
            })
          }
          <HeroPrimary beta={beta} gamma={gamma} />
          {
            trigPaths.map((path, index) => {
              return (
                <HeroSecondary
                  key={index}
                  path={path}
                />
              );
            })
          }
        </Canvas>
      </CanvasContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <pre style={{ alignSelf: 'center', color: 'white' }}>{alpha}</pre>
        <pre style={{ alignSelf: 'center', color: 'white' }}>{beta}</pre>
        <pre style={{ alignSelf: 'center', color: 'white' }}>{gamma}</pre>
        <button onClick={getAccel}>
          <h1>Access Accel Data</h1>
        </button>
      </div>
    </>
  );
};

HeroCanvas.propTypes = {
  lights: PropTypes.array,
  trigPaths: PropTypes.array,
};
