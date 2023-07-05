import React, { useState } from 'react';

import './styles.css';

export function Exercise2() {
  const [isVisible, setVisibility] = useState(true);
  const buttonLabel = isVisible ? 'Hide' : 'Show';
  const handleClick = () => {
    setVisibility(!isVisible);
  };
  return (
    <div>
      <h2>See or not</h2>
      <button className="button-hide" onClick={handleClick}>
        {buttonLabel}
      </button>
      {isVisible && <p>Now you see me</p>}
    </div>
  );
}

// // albo
// ...
// {isVisible ? (
//   <h2>isVisible jest na TRUE</h2>
// ) : (
//   <h2>isVisible jest na FALSE</h2>
// )}
// <hr />
// {isVisible && <h2>tajny text</h2>}
// </div>
