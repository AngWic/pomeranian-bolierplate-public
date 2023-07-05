import { useState } from 'react';
import { useEffect } from 'react';

export const Timer = () => {
  const MIN_TIMER_VALUE = 0;
  const [chosenTime, setChosenTime] = useState(30 * 1000);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setTimer(chosenTime);
  }, [chosenTime]);

  const changeTimer = (chosenTime) => {
    setChosenTime(chosenTime * 1000);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted) {
      let timerInterval = setInterval(() => {
        setTimer((currentTimer) => {
          return currentTimer > MIN_TIMER_VALUE
            ? currentTimer - 1000
            : currentTimer;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timer, gameStarted]);

  return (
    <>
      You've chosen to play for {chosenTime / 1000} seconds and you're left
      with: <span className="time-left-memo">{timer / 1000} seconds</span>
      <div className="buttons-wrapper-for-memo">
        <button
          className="button-click-for-memo"
          onClick={() => changeTimer(30)}
        >
          30
        </button>
        <button
          className="button-click-for-memo"
          onClick={() => changeTimer(60)}
        >
          60
        </button>
        <button
          className="button-click-for-memo"
          onClick={() => changeTimer(90)}
        >
          90
        </button>
      </div>
      <button className="button-click-for-memo" onClick={() => startGame()}>
        Start
      </button>
    </>
  );
};
