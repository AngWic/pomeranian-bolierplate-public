import React, { useState } from 'react';
import './styles.css';

export const WelcomeView = () => {
  const [inputValue, setInput] = useState('');

  function getInputValue(paramter) {
    setInput(paramter.target.value);
  }
  const [charactersInput, setCharactersInput] = useState(0);

  function buttonClicked() {
    setCharactersInput(inputValue.replace(' ', '').length);
  }
  return (
    <div className="welcome-view">
      <h2 className="header1">Cześć!</h2>
      <h3 className="header2">Wpisz tekst</h3>
      <input
        placeholder="text"
        onChange={(e) => getInputValue(e)}
        type="number"
      />
      <button className="button" onClick={() => buttonClicked()}>
        CLICK
      </button>
      <div>wartość input: {inputValue}</div>
      <div>ilość liter: {charactersInput}</div>
    </div>
  );
};
