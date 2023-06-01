import { useState } from 'react';
import { useEffect } from 'react';

export const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <>
      <p>
        Current difficulty {difficulty}x{difficulty} grid
      </p>
      <p>Select on of the difficulties:</p>
      <div className="buttons-wrapper-for-memo">
        <button
          className="button-click-for-memo"
          onClick={() => setDifficulty(2)}
        >
          2
        </button>
        <button
          className="button-click-for-memo"
          onClick={() => setDifficulty(4)}
        >
          4
        </button>
        <button
          className="button-click-for-memo"
          onClick={() => setDifficulty(6)}
        >
          6
        </button>
      </div>
    </>
  );
};
