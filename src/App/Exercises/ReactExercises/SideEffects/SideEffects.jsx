import React, { useEffect, useState } from 'react';
import './styles.css';

//...export function SideEffects(props)
// const { number } = props;

// useEffect(() => {
//   console.log('number: ' + number);
// }, [number]);

export function SideEffects() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('value: ' + value);
    return () => {
      console.log('return useeffect value');
    };
  }, [value]);

  const [age, setAge] = useState(10);

  useEffect(() => {
    console.log(`age: ${age}`);
    return () => {
      console.log('return useeffect age');
    };
  }, [age]);

  // console.log('poza use effect');

  return (
    <div className="side-effects">
      <button
        className="side-effects-button-value"
        onClick={() => setValue(value + 1)}
      >
        set value
      </button>
      <div>{value}</div>
      <hr />
      <button
        className="side-effects-button-age"
        onClick={() => setAge(age + 1)}
      >
        set age
      </button>
      <div>{age}</div>
    </div>
  );
}
