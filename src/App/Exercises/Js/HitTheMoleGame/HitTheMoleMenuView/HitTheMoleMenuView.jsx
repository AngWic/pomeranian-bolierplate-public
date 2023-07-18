// import { useState } from 'react';
import { HitTheMoleSelector } from '../HitTheMoleSelector/HitTheMoleSelector';
import { HitTheMoleButton } from '../HitTheMoleButton/HitTheMoleButton';

//we wcześniejszej wersji:

// const molesTimeOptions = [
//     { value: 1, label: '1 minuta' },
//     { value: 2, label: '2 minuty' },
//     { value: 3, label: '3 minuty' },
//   ];

//   const molesAmountOptions = [
//     { value: 1, label: '1 kret' },
//     { value: 2, label: '2 krety' },
//     { value: 3, label: '3 krety' },
//   ];

// const [isGameStarted, setGameStarted] = useState(false);

export const HitTheMoleMenuView = ({ setGameStarted }) => {
  return (
    <>
      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Czas gry</div>

        <HitTheMoleSelector
          optionsForMoles={[
            { value: 1, label: '1 minuta', isActive: true },
            { value: 2, label: '2 minuty', isActive: false },
            { value: 3, label: '3 minuty', isActive: false },
          ]}
        />
      </div>

      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Liczba kretów</div>

        <HitTheMoleSelector
          optionsForMoles={[
            { value: 1, label: '1 kret', isActive: false },
            { value: 2, label: '2 krety', isActive: true },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        />
      </div>

      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Przyciski sterujące</div>
        <HitTheMoleButton onClick={() => setGameStarted(true)}>
          Start
        </HitTheMoleButton>
      </div>
    </>
  );
};

/* {molesTimeOptions.map(({ value, label }) => {
      // const { value, label } = object;
      return (
        <HitTheMoleButton
          isActive={time === value}
          onClick={() => setTime(value)}
        >
          {label}
        </HitTheMoleButton>
      );
    })} */

/* </div>
      <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Liczba kretów</div> */

/* {molesAmountOptions.map(({ value, label }) => {
      return (
        <HitTheMoleButton
          isActive={moles === value}
          onClick={() => setMoles(value)}
        >
          {label}
        </HitTheMoleButton>
      );
    })} */

/* <HitTheMoleSelector
          className="hit-the-mole-container"
          optionsForMoles={[
            { value: 1, label: '1 kret', isActive: false },
            { value: 2, label: '2 krety', isActive: true },
            { value: 3, label: '3 krety', isActive: false },
          ]}
        /> */

/* 
    <HitTheMoleButton isActive={moles === 1} onClick={() => setMoles(1)}>
      1 kret
    </HitTheMoleButton>
    <HitTheMoleButton isActive={moles === 2} onClick={() => setMoles(2)}>
      2 kret
    </HitTheMoleButton>
    <HitTheMoleButton isActive={moles === 3} onClick={() => setMoles(3)}>
      3 krety
    </HitTheMoleButton> */

/* </div> */

/* <div className="hit-the-mole-container">
        <div className="hit-the-mole-label">Przyciski sterujące</div> */

/* {isGameStarted && (
      <HitTheMoleButton onClick={() => setGameStarted(false)}>
        Stop
      </HitTheMoleButton>
    )}
    {!isGameStarted && (
      <HitTheMoleButton onClick={() => setGameStarted(true)}>
        Start
      </HitTheMoleButton>
    )} */

/* TO SAMO MOŻNA ZAPISAĆ: */

/* {isGameStarted ? (
          <HitTheMoleButton
            onClick={() => setGameStarted(false)}
            isActive={true}
          >
            Stop
          </HitTheMoleButton>
        ) : ( */

/* <HitTheMoleButton onClick={() => setGameStarted(true)}>
          Start
        </HitTheMoleButton>
        {/* )} */

/* </div> */
