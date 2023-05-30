import './styles.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useId } from 'react';

const Cell = ({ value, clicked }) => {
  const uniqueID = useId();
  return (
    <div
      className={`Y ${clicked ? 'clicked-for-memo' : ''}`}
      onClick={() => handleClick(uniqueID)}
    >
      {uniqueID}
    </div>
  );
};

const MemoBoard = ({ board }) => {
  return board.map((X, xindex) => (
    <div key={`X-${xindex}`} className="X">
      {' '}
      {X.map((Y, yindex) => (
        <Cell
          key={`Y-${yindex}`}
          value={Y.value}
          clicked={Y.clicked}
          handleClick={handleClick}
        />
      ))}{' '}
    </div>
  ));
};

const Timer = () => {
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
          currentTimer > MIN_TIMER_VALUE ? currentTimer - 1000 : currentTimer;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timer, gameStarted]);

  return (
    <>
      You've chosen to play for {chosenTime / 1000} seconds and you're left
      with: {timer / 1000}
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
      <button className="button-start-for-memo" onClick={() => startGame()}>
        Start
      </button>
    </>
  );
};

const Difficulty = ({ changeBoardGrid }) => {
  const [diff, setDiff] = useState(4);
  const changeDif = (newDif) => {
    setDiff(newDif);
  };

  useEffect(() => {
    changeBoardGrid(diff);
  }, [diff]);

  return (
    <>
      <p>
        Current difficulty {diff}x{diff} grid
      </p>
      <p>Select on of the difficulties:</p>
      <div className="buttons-wrapper-for-memo">
        <button className="button-click-for-memo" onClick={() => changeDif(2)}>
          2
        </button>
        <button className="button-click-for-memo" onClick={() => changeDif(4)}>
          4
        </button>
        <button className="button-click-for-memo" onClick={() => changeDif(6)}>
          6
        </button>
      </div>
    </>
  );
};

export const Exercise = () => {
  const [board, setBoard] = useState(
    new Array(4).fill(
      new Array(4).fill({ value: '', clicked: false, isTurned: false, id: '' })
    )
  );

  const handleClick = (id) => {
    console.log(id);

    // TODO: Get element and change it's clicked value
  };

  const changeBoardGrid = (gridSize) => {
    setBoard(
      new Array(gridSize).fill(
        new Array(gridSize).fill({ value: '', clicked: false })
      )
    );
  };

  return (
    <>
      <Timer />
      <Difficulty changeBoardGrid={changeBoardGrid} />

      <div className="wrapper-for-memo">
        {' '}
        <MemoBoard board={board} />{' '}
      </div>
    </>
  );
};

//ĆWICZENIE 1:
// export const User = ({ i, name, age, setUsers }) => {
//   const changeUserName = (newNameLetter) => {
//     if (newNameLetter === '') return;

//     setUsers((prevUsers) => {
//       const certainUser = { ...prevUsers[i] };

//       certainUser.name = newNameLetter;

//       prevUsers.splice(i, 1, certainUser);

//       return [...prevUsers];
//     });
//   };

//   return (
//     <div>
//       {i + 1}user: {name} is {age} old but prefers to be named:
//       {name && (
//         <input type="text" onChange={(e) => changeUserName(e.target.value)} />
//       )}
//     </div>
//   );
// };

// export const Users = () => {
//   const [users, setUsers] = useState([
//     {
//       name: 'Lukas',
//       age: 9999,
//     },
//     {
//       name: 'Lukas',
//       age: 2,
//     },
//   ]);

//   return users.map((user, index) => (
//     <User
//       key={index}
//       i={index}
//       age={user.age}
//       name={user.name}
//       setUsers={setUsers}
//     />
//   ));
// };

// export const Exercise = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column ' }}>
//       <Users />
//     </div>
//   );
// };
