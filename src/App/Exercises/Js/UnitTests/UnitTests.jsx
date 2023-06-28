import { useState } from 'react';
import './styles.css';

export function roundResult(value) {
  return value.toFixed(2);
}

export function checkStatus(status) {
  return !status;
}

//------Using a mock function...
export function getResultAndStatus(value, checkStatusFn, status) {
  return {
    result: roundResult(value),
    status: checkStatusFn(status),
  };
}

getResultAndStatus(25.3221, checkStatus, true);
//...Using a mock function------

export function UnitTests() {
  const [show, setShow] = useState(false);
  const result = 25.3221;
  return (
    <div className="unit-tests">
      <h2>Unit tests</h2>
      <div role="result-value" className="result-value">
        result: {roundResult(result)}
      </div>
      <hr />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Click
      </button>
      {show && <p>Clicked</p>}
      <hr />
      <h3>Unit tests</h3>
      <span className="test-span">to jest testowy span</span>
      <br />
      <span className="test-span">to jest drugi testowy span</span>
      <h4>Unit tests</h4>
    </div>
  );
}
