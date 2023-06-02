import './MemoGame.css';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';
import { Board } from './Board/Board';
import { GameView } from './GameView/GameView';

export function MemoGame() {
  const [boardSize, setBoardSize] = useState(20);
  const [isGameStarted, setGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();

  const [stopGame, setStopGame] = useState(false);
  const [myTime, setMyTime] = useState(0);

  console.log(boardSize);

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
      {stopGame && isGameStarted ? (
        <h1>
          Congratulations! You MEMOrised {boardSize / 2} pairs in time:{myTime}
        </h1>
      ) : (
        ''
      )}
      {!isGameStarted && (
        <MenuView
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          boardSize={boardSize}
        />
      )}
      {isGameStarted && (
        <GameView
          setGameStarted={setGameStarted}
          setStepAmount={setStepAmount}
          stepAmount={stepAmount}
          time={time}
          myTime={myTime}
        />
      )}

      {isGameStarted && (
        <Board
          boardSize={boardSize}
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
          setStopGame={setStopGame}
          time={time}
          setMyTime={setMyTime}
        />
      )}
    </div>
  );
}
