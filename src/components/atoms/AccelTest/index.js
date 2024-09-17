// import React, { useState } from 'react';
//
// // eslint-disable-next-line react/prop-types
// export const AccelTest = () => {
//   // const [positionX, setPositionX] = useState(50);
//   // const [velocityX, setVelocityX] = useState(50);
//   // const [positionY, setPositionY] = useState(50);
//   // const [velocityY, setVelocityY] = useState(50);
//   // const updateRate = 1/60;
//
//   const [alpha, setAlpha] = useState('init');
//   const [beta, setBeta] = useState('init');
//   const [gamma, setGamma] = useState('init');
//
//   const getAccel = () => {
//     // setData('clicked');
//     // setData(`${DeviceOrientationEvent.requestPermission}`);
//     if (typeof DeviceOrientationEvent.requestPermission === 'function') {
//       DeviceOrientationEvent.requestPermission()
//           .then((permissionState) => {
//             // setData(permissionState);
//             if (permissionState === 'granted') {
//               window.addEventListener('deviceorientation', (event) => {
//                 setAlpha(`${event.alpha}`);
//                 setBeta(`${event.beta}`);
//                 setGamma(`${event.gamma}`);
//               });
//             }
//           })
//           .catch(console.error);
//     }
//   };
//
//   return (
//     <>
//       <pre style={{ alignSelf: 'center', color: 'white' }}>{alpha}</pre>
//       <pre style={{ alignSelf: 'center', color: 'white' }}>{beta}</pre>
//       <pre style={{ alignSelf: 'center', color: 'white' }}>{gamma}</pre>
//       <button onClick={getAccel}>
//         <h1>Access Accel Data</h1>
//       </button>
//
//       <div />
//     </>
//   );
// };
