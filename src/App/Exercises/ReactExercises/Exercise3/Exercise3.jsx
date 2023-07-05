import React, { useState } from 'react';

import './styles.css';

export function Exercise3() {
  const [givenNumber, setGivenNumber] = useState();
  const handleChange = (event) => {
    // alternatywa na dole
    setGivenNumber(event.target.value);
  };

  const isGreaterThan10 = givenNumber > 10;

  return (
    <div>
      <h2>Czy podana liczba jest większa od 10?</h2>
      <input type="number" onChange={handleChange} />
      {isGreaterThan10 ? (
        <p>Tak, liczba {givenNumber} jest większa od 10</p>
      ) : (
        <p>Nie, liczba {givenNumber} nie jest większa od 10</p>
      )}
    </div>
  );
}
// const [text, setText] = useState('');
// const handleChange = (event) => {
//   const newValue = Number (event.targer.value);
//   setGivenNumber(event.target.value);
//   if (newValue > 10) {
//     setText('podana liczba jest większa niż 10')
//   } else if (newValue == 10) {
//     setText('podana liczba jest rowna 10');
//   } else {
//     setText('podana liczba jest mniejsza niż 10')
//   }

//   }
