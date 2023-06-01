import { Cell } from '../Cell/Cell';

export const MemoBoard = ({ board }) => {
  return board.map((X, xindex) => (
    <div key={`X-${xindex}`} className="Xmemo">
      {' '}
      {X.map((Y, yindex) => (
        <Cell
          key={`Ymemo-${yindex}`}
          value={Y.value}
          clicked={Y.clicked}
          // handleClick={handleClick}
        />
      ))}{' '}
    </div>
  ));
};
