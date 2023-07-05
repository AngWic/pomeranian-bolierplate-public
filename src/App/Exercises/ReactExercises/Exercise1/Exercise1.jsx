import React, { useState } from 'react';

import './styles.css';

export function Exercise1() {
  const [clicks, setClicks] = useState(0);
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const resetClick = () => {
    setClicks(0);
  };
  const isFiveClicks = clicks === 5;

  return (
    <div>
      <p className="message">Kliknąłeś {clicks} razy!</p>
      <button className="button-click" onClick={handleClick}>
        Click!
      </button>
      <br />
      <button className="button-reset" onClick={resetClick}>
        Reset
      </button>
      {/* <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset_opcja2
      </button> */}
      {isFiveClicks && <p className="message">Jest już 5 klików!</p>}
    </div>
  );
}
// /*albo
//   ...
//   const [text, setText] = useState('start');

//   const handleClick = () => {
//     if (clicks < 5) {
//       setClicks(clicks + 1);
//       setText('ilosc klikniec: ' + clicks);
//       } else {
//         setText('osiagnieto 5 klikniec;);
//       }
//   }
//   /*i wtedy ...<p>{text}</p>
