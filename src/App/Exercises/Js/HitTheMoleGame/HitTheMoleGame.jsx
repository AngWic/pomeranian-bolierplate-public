import './styles.css';
import React from 'react';
import { HitTheMoleMenu } from './HitTheMoleMenu/HitTheMoleMenu';
import { HitTheMoleButton } from './HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleSelectButton } from './HitTheMoleSelectButton/HitTheMoleSelectButton';

export const HitTheMoleGame = () => {
  return (
    <div className="hit-the-mole-game">
      <h2>Hit The Mole Game</h2>

      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      <HitTheMoleMenu label="Czas gry">
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
      </HitTheMoleMenu>
    </div>
  );
};
