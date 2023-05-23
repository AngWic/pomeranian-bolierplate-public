import './styles.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

export const SetTimeout = () => {
  const staticState = {
    fontSize: '30px',
    transition: 'all 5s',
    rotate: '0deg',
    color: 'red',
    backgroundColor: 'black',
    textAlign: 'center',
  };
  const [rotate, setRotate] = useState(staticState);
  const onClickHandle = () => {
    setRotate((prev) => ({
      ...prev,
      fontSize: '60px',
      rotate: '25deg',
      color: 'green',
      backgroundColor: 'aqua',
      textAlign: 'center',
    }));
    setTimeout(() => {
      setRotate(staticState);
    }, 5 * 1000);
  };

  return (
    <div>
      <p style={rotate}>come to the dark side</p>
      <button className="star-wars-button" onClick={onClickHandle}>
        never
      </button>
    </div>
  );
};

// const [milisecondToParty, setmilisecondToParty] = useState(
//   new Date() - new Date('05.24.2023')
// );

// function msToTime(duration) {
//   let miliseconds = Math.floor(duration % 1000);
// }

// console.log(milisecondToParty);

//do skończenia
//   const [rotate, setRotate] = useState();

//   return (
//     <div>
//       <h1>come to the dark side</h1>
//       <button>never</button>
//     </div>
//   );
// };

// const [style, setStyle] = useState({
//   position: 'absolute',
//   left: -1000,
//   transition: 'all 5s',
// });
// setTimeout(() => {
//   setStyle({ position: 'absolute', left: 500, transition: 'all 5s' });
// }, 5 * 1000);
// return (
//   <div>
//     <h1 style={style}>Promocja</h1>
//   </div>
// );

//NIESKOŃCZONE:
// const [seconds, setSeconds] = useState(60);
// const timer = () => {
//   setInterval(() => {
//     setSeconds(seconds - 1);
//   }, 1 * 1000);
// useEffect(() => {
//   const timer = setInterval(() => {
//     setSeconds(seconds - 1);
//   }, 1 * 1000);
//   if (seconds < 1) {
//     return seconds;
//   }
// });

// return (
//   <div>
//     <h2>{seconds}</h2>
//   </div>
// );

//NIESKOŃCZONE:
// const [isVisible, setIsVisible] = useState(true);
//   const style = { opacity: 1, transition: 'all 3s' };
//   const changeOpacity = () => {
//     newStyle = { opacity: 0, transition: 'all 3s' };
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 3 * 1000);
//   };

//   return (
//     <div>
//       {isVisible && <p style={style}>My name is Slim Shady</p>}
//       <button onClick={changeOpacity}>My name is what?</button>
//     </div>
//   );

// const timer2 = setInterval(async () => {
//   console.log('Hello');
// }, 1000);

// const timer = setTime(async () => {
//   console.log('hello');
// }, 1000);

// const wait = (ms) =>
//   new Promise((resolve, reject) => setTimeout(resolve, ms));
// for (let i = 0; i < 3; i++) {
//   wait(i * 100).then(() => console.log(i));
// }
// return (
//   <div>
//     <p>
//       <b>S</b>et Time Out
//     </p>
//   </div>
// );

// setTimeout(() => {
//   console.log('hello');
// }, 1000);
// setTimeout(() => {
//   console.log('hello to you too');
// }, 3000);
// setTimeout(() => {
//   console.log('hello from the other side');
// }, 4000);
// setTimeout(() => {
//   console.log('come to the dark side ');
// }, 5000);
