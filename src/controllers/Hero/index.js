import React from 'react';
import { HeroText } from 'components/molecules/HeroText';
import { HeroCanvas } from 'components/animation/HeroCanvas';
import { lights, trigPaths } from './data';
// import { AccelTest } from 'components/atoms/AccelTest';

export const HeroController = () => {
  return (
    <>
      <HeroCanvas
        lights={lights}
        trigPaths={trigPaths}
      />
      {/* <AccelTest />*/}
      <HeroText/>
    </>
  );
};
