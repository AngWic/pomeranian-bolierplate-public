import './styles.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useId } from 'react';
import db from './db.json';

import { Difficulty } from './MemoGameComponents/Difficulty/Difficulty';
import { MemoBoard } from './MemoGameComponents/MemoBoard/MemoBoard';
import { Timer } from './MemoGameComponents/Timer/Timer';

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNames = (difficulty) => {
  const names = new Array((difficulty * difficulty) / 2).fill('');

  names.forEach((_, index) => {
    let randomIndex = rand(0, db.names.length);
    names[index] = db.names[randomIndex];
  });

  return names;
};

export const Exercise = () => {
  // TODO: When all tiles turned and timer > 0 alert("Win!")
  // TODO: Fill with names
  // const [namesToFillTheBoard, setNamesToFillTheBoard] = useState(
  //   new Array(2).fill('')
  // );

  const [difficulty, setDifficulty] = useState(2);

  const namesToFillTheBoard = getRandomNames(difficulty);
  console.log('namesToFillTheBoard', namesToFillTheBoard);

  // const newArr = new Array(difficulty).fill({
  //   value: '',
  //   clicked: false,
  //   isTurned: false,
  //   id: '',
  // });
  const [board, setBoard] = useState(getInitialBoard(difficulty)
    // newArray
  );
  console.log('board', board);

  useEffect(() => {
    if (difficulty * difficulty !== board.length) {
      setBoard(getInitialBoard(difficulty));
  },}, [difficulty]);

  useEffect(() => {
    const newBoard = board.flat();
    const namesAmount = namesToFillTheBoard.length;

    namesToFillTheBoard.forEach((name, index) => {
      newBoard[index] = { ...newBoard[index], value: name };
      newBoard[index + namesAmount] = {
        ...newBoard[index + namesAmount],
        value: name,
      };
    });

    setBoard(newBoard);
  }, [difficulty]);

  const organiseArray = () => {
    const shuffledArray = shuffleArray(board);
    const newArr = new Array(difficulty).fill('');
    return newArr.map((_, index) => {
      const value = index * difficulty;
      return shuffledArray.slice(value, value + difficulty);
    });
  };

  return (
    <>
      <Timer />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <div
        className="wrapper-for-memo"
        style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}
      >
        <MemoBoard board={organiseArray()} />
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
