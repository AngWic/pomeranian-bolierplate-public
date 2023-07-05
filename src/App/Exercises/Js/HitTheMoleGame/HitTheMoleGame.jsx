import './styles.css';
import React, { useState } from 'react';

import { HitTheMolePlayground } from './HitTheMolePlayground/HitTheMolePlayground';
import { HitTheMoleMenuView } from './HitTheMoleMenuView/HitTheMoleMenuView';
import { HitTheMoleGameView } from './HitTheMoleGameView/HitTheMoleGameView';

export function HitTheMoleGame() {
  // const [time, setTime] = useState(3); // już niepotrzebne
  // const [moles, setMoles] = useState(1); // już niepotrzebne
  const [isGameStarted, setGameStarted] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  //ZAMIAST PONIŻSZEGO const molesLabelSuffix:

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

      {isGameStarted ? (
        <HitTheMoleGameView
          setGameStarted={setGameStarted}
          gameScore={gameScore}
          setGameScore={setGameScore}
        />
      ) : (
        <HitTheMoleMenuView setGameStarted={setGameStarted} />
      )}

      <>
        {isGameStarted && (
          <HitTheMolePlayground
            gameScore={gameScore}
            setGameScore={setGameScore}
          />
        )}
      </>
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
