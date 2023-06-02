import { HitTheMoleButton } from '../../HitTheMoleGame/HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleMenu } from '../../HitTheMoleGame/HitTheMoleMenu/HitTheMoleMenu';
import './GameView.css';

export const GameView = ({
  setGameStarted,
  stepAmount,
  time,
  myTime,
  setStepAmount,
}) => {
  const stopButtonClick = () => {
    setGameStarted(false);
    setStepAmount(0);
  };

  return (
    <>
      <HitTheMoleMenu label="Czas gry:">
        <div className="hit-the-mole-value-field">
          {myTime !== 0 ? myTime : time}
        </div>
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Liczba ruchów:">
        <div className="hit-the-mole-value-field">{stepAmount}</div>
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Przyciski sterujące">
        <HitTheMoleButton onClick={() => stopButtonClick()}>
          Stop
        </HitTheMoleButton>
      </HitTheMoleMenu>
    </>
  );
};
