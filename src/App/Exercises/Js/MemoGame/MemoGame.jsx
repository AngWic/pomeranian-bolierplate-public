import './MemoGame.css';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { Board } from './Board/Board';
import { GameView } from './GameView/GameView';

export function MemoGame() {
  const boardSize = 16;
  const [isGameStarted, setGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [time, setTime] = useState(0);

  const [timeInterval, setTimeInterval] = useState();

  let gameInterval;

  useEffect(() => {
    if (isGameStarted) {
      gameInterval = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTimeInterval();
      setTime(0);
    }
  }, [isGameStarted]);

  return (
    <div className="memo-game">
      {!isGameStarted && <MenuView setGameStarted={setGameStarted} />}
      {isGameStarted && (
        <GameView
          setGameStarted={setGameStarted}
          stepAmount={stepAmount}
          time={time}
        />
      )}

      {/* <MenuView isGameStarted={isGameStarted} setGameStarted={setGameStarted} /> */}
      {isGameStarted && (
        <Board
          boardSize={boardSize}
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
        />
      )}
    </div>
  );
}
