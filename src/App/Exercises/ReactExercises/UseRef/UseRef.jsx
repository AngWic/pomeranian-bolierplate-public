import { useRef } from 'react';
import './styles.css';
// import { useEffect } from 'react';
import { useState } from 'react';

export const UseRef = () => {
  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState();
  const cursor = useRef(null);

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return (
    <div>
      <button onClick={(event) => setClick(event.target.value)}>
        remove the duck
      </button>
      <div
        style={{ minHeight: '100vh', minWidth: '100vw' }}
        onMouseMove={changePosition}
      >
        <div className="cursor-dot-style" ref={cursor}>
          &#129414;
        </div>
      </div>
    </div>
  );
};

export default UseRef;
//-------------------------------------------------------------------
// const [name, setName] = useState('');
// const prevName = useRef('');
// useEffect(() => {
//   prevName.current = name;
// }, [name]);
// return (
//   <div>
//     Imię:
//     <input
//       value={name}
//       onChange={(event) => setName(event.target.value)}
//       type="text"
//     />
//     <div>imię: {name}</div>
//     <div>stan poprzedni: {prevName.current}</div>
//   </div>
// );
// const [value, setValue] = useState('');
// // const [renderCount, setRenderCount] = useState(0); // zamiast tego:
// const renderCount = useRef(0);
// // const ref = useRef();
// // useEffect(() => {
// //   setRenderCount(renderCount + 1);
// // }, [value]);
// //zamiast tego:
// renderCount.current = renderCount.current + 1;
// return (
//   <div>
//     Imię:
//     <input
//       value={value}
//       onChange={(event) => setValue(event.target.value)}
//       type="text"
//     />
//     <div>Wartość inputa: {value}</div>
//     {/* <div>Ilość renderów: {renderCount}</div> */}
//     <div>Ilość renderów: {renderCount.current}</div>
//   </div>
// );
// console.log(document.getElementsByClassName('use-ref-p')); // nic nie wyjdzie, po <p> jest poniżej
//--------------------------------------------------------------------------------
//   const paraRef = useRef();
//   useEffect(() => {
//     console.log(paraRef.current);
//   }, [paraRef]);
//   const inputRef = useRef();
//   return (
//     <div>
//       <h1>useRef from React</h1>
//       {/* <p className="use-ref-p">para</p> */}
//       {/* <p ref={paraRef}>paragraph</p>
//     <hr /> */}
//       {/* <input ref={inputRef} type="text" />
//     <button
//       onClick={() => {
//         inputRef.current.focus(); //dzięki 'focus' kursor wstawia się do inputa po kliknięciu w button
//       }}
//     >
//       Click
//     </button>
//     <hr /> */}
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Come to the dark side..."
//         className="upload-file-input"
//       />
//       <hr />
//       <button
//         className="upload-file-button-dark"
//         onClick={() => {
//           inputRef.current.value = 'Now, go and bring peace to the Empire';
//           // inputRef.current.click();
//         }}
//       >
//         I'll join you
//       </button>
//       <button
//         className="upload-file-button-never"
//         onClick={() => {
//           inputRef.current.value = 'So be it.';
//           // inputRef.current.click();
//         }}
//       >
//         NEVER!
//       </button>
//     </div>
//   );
// };
