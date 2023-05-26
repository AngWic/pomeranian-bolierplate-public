import './styles.css';
import React, { useState } from 'react';
import { HitTheMoleMenu } from './HitTheMoleMenu/HitTheMoleMenu';
import { HitTheMoleButton } from './HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleSelectButton } from './HitTheMoleSelectButton/HitTheMoleSelectButton';
import { HitTheMoleSelector } from './HitTheMoleSelector/HitTheMoleSelector';

export function HitTheMoleGame() {
  const [time, setTime] = useState(3);
  const [moles, setMoles] = useState(1);

  //ZAMIAST PONIŻSZEGO const molesLabelSuffix:
  const molesTimeOptions = [
    { value: 1, label: '1 minuta' },
    { value: 2, label: '2 minuty' },
    { value: 3, label: '3 minuty' },
  ];

  const molesAmountOptions = [
    { value: 1, label: '1 kret' },
    { value: 2, label: '2 krety' },
    { value: 3, label: '3 krety' },
  ];

  // function molesTimeInstruction(object) {
  //   // const molesLabelSuffix = object.value === 1 ? 'minuta' : 'minuty';
  //   return (
  //     <HitTheMoleButton
  //       isActive={time === object.value}
  //       onClick={() => setTime(object.value)}
  //     >
  //       {object.label}
  //     </HitTheMoleButton>
  //   );
  // }

  // function molesAmountInstruction(object) {
  //   return (
  //     <HitTheMoleButton
  //       isActive={moles === object.value}
  //       onClick={() => setMoles(object.value)}
  //     >
  //       {object.label}
  //     </HitTheMoleButton>
  //   );
  // }

  //DEKLARACJA DLA setTime:
  function handleClick1() {
    setTime(1);
  }
  // function handleClick2() {
  //   setTime(2);
  // }
  // const handleClick2 = () => {
  //   setTime(2);
  // };
  // function handleClick3() {
  //   setTime(3);
  // }

  // const handleClick3 = () => setTime(3);

  //ZAPIS W RETURN:
  // <HitTheMoleButton isActive={time === 1} onClick={handleClick1}>
  //         1 minuta
  //       </HitTheMoleButton>
  //       <HitTheMoleButton
  //         isActive={time === 2}
  //         onClick={() => {
  //           setTime(2);
  //         }}
  //       >
  //         2 minuty
  //       </HitTheMoleButton>
  //       <HitTheMoleButton isActive={time === 3} onClick={() => setTime(3)}>
  //         3 minuty
  //       </HitTheMoleButton>

  //DEKLARACJA DLA time:

  // let moleButtonIsActive;

  // if (time === 1) {
  //   moleButtonIsActive = true;
  // } else {
  //   moleButtonIsActive = false;
  // }

  // let moleButtonIsActive = time === 1 ? true : false;
  // let moleButtonIsActive = time === 1;

  return (
    <div className="hit-the-mole-game">
      <h2>Hit The Mole Game</h2>

      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Czas gry</div>

        <HitTheMoleSelector
          className="hit-the-mole-container"
          optionsForMoles={[
            { value: 1, label: '1 minuta', isActive: true },
            { value: 2, label: '2 minuty', isActive: false },
            { value: 3, label: '3 minuty', isActive: false },
          ]}
        />

        {/* {molesTimeOptions.map(({ value, label }) => {
          // const { value, label } = object;
          return (
            <HitTheMoleButton
              isActive={time === value}
              onClick={() => setTime(value)}
            >
              {label}
            </HitTheMoleButton>
          );
        })} */}
      </div>
      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Liczba kretów</div>

        {/* {molesAmountOptions.map(({ value, label }) => {
          return (
            <HitTheMoleButton
              isActive={moles === value}
              onClick={() => setMoles(value)}
            >
              {label}
            </HitTheMoleButton>
          );
        })} */}

        <HitTheMoleSelector
          className="hit-the-mole-container"
          optionsForMoles={[
            { value: 1, label: '1 kret', isActive: false },
            { value: 2, label: '2 krety', isActive: true },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        />

        {/* 
        <HitTheMoleButton isActive={moles === 1} onClick={() => setMoles(1)}>
          1 kret
        </HitTheMoleButton>
        <HitTheMoleButton isActive={moles === 2} onClick={() => setMoles(2)}>
          2 kret
        </HitTheMoleButton>
        <HitTheMoleButton isActive={moles === 3} onClick={() => setMoles(3)}>
          3 krety
        </HitTheMoleButton> */}
      </div>

      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Przyciski sterujące</div>
        <HitTheMoleButton>Start</HitTheMoleButton>
      </div>
    </div>
  );
}

/* // DESTRUKTURYZACJA OD CZEGO ZACZĄĆ: */

/* {molesTimeOptions.map((object) => (
          <HitTheMoleButton
            isActive={time === object.value}
            onClick={() => setTime(object.value)}
          >
            {object.label}
          </HitTheMoleButton>
        ))} */

/* <HitTheMoleButton isActive={time === 1} onClick={handleClick1}>
          1 minuta
        </HitTheMoleButton>
        <HitTheMoleButton
          isActive={time === 2}
          onClick={() => {
            setTime(2);
          }}
        >
          2 minuty
        </HitTheMoleButton>
        <HitTheMoleButton isActive={time === 3} onClick={() => setTime(3)}>
          3 minuty
        </HitTheMoleButton> */

/* // DESTRUKTURYZACJA KROK 1: */

/* {molesTimeOptions.map((object) => {
          const { value, label } = object;
          return (
            <HitTheMoleButton
              isActive={time === value}
              onClick={() => setTime(value)}
            >
              {label}
            </HitTheMoleButton>
          );
        })} */

/* // DESTRUKTURYZACJA KROK 2: */

/* <HitTheMoleMenu label="Czas gry">
        <HitTheMoleSelectButton
          options={[
            { label: '1 minuta', value: 1 },
            { label: '2 minuty', value: 2 },
            { label: '3 minuty', value: 3 },
          ]}
        />
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Liczba kretów">
        <HitTheMoleSelectButton
          options={[
            { label: '1 kret', value: 1 },
            { label: '2 krety', value: 2 },
            { label: '3 krety', value: 3 },
          ]}
        />
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Przyciski sterujące">
        <HitTheMoleButton>Start</HitTheMoleButton>
      </HitTheMoleMenu> */
