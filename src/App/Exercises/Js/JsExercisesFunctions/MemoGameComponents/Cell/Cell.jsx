import { useId } from 'react';

export const Cell = ({ value, clicked }) => {
  const uniqueID = useId();
  return (
    <div
      className={`Y ${clicked ? 'clicked-for-memo' : ''}`}
      // onClick={() => handleClick(uniqueID)}
    >
      {/* {uniqueID} */}
    </div>
  );
};
