import { HitTheMoleButton } from '../../HitTheMoleGame/HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleMenu } from '../../HitTheMoleGame/HitTheMoleMenu/HitTheMoleMenu';
import './GameView.css';

export const GameView = ({ setGameStarted, stepAmount, time }) => {
  return (
    <>
      <HitTheMoleMenu label="Czas gry:">
        <div className="hit-the-mole-value-field">{time}</div>
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Liczba ruchów:">
        <div className="hit-the-mole-value-field">{stepAmount}</div>
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Przyciski sterujące">
        <HitTheMoleButton onClick={() => setGameStarted(false)}>
          Stop
        </HitTheMoleButton>
      </HitTheMoleMenu>
    </>
  );
};
