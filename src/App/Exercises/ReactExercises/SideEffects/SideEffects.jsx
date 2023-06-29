import React, { useEffect, useState } from 'react';
import './styles.css';

export function SideEffects() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 2);

      setTimeout(() => {}, 2000);

      if (number === 1) {
        resolve([{ name: 'Iga' }, { name: 'Aga' }, { name: 'Olga' }]);
      } else {
        reject([]);
      }
    });

    //wyłączyć <React.StrictMode> z gł. pliku index.js

    myPromise //chaining:
      .then((result) => {
        setValue(result);
      })
      .catch((error) => {
        setValue(error);
      });
    // .finally(() => {
    //   console.log('finally');
    // });

    // myPromise.catch((error) => { // gdy błąd
    //   console.log(error);
    // });
  }, []);

  return (
    <div className="side-effects">
      <div>Asynchronous JavaScript</div>

      <ul>
        {value.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <hr />
      <div>Side effects below...</div>
    </div>
  );
}

//...export function SideEffects(props)
// const { number } = props;

// useEffect(() => {
//   console.log('number: ' + number);
// }, [number]);

// export function SideEffects() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('value: ' + value);
//     return () => {
//       console.log('return useeffect value');
//     };
//   }, [value]);

//   const [age, setAge] = useState(10);

//   useEffect(() => {
//     console.log(`age: ${age}`);
//     return () => {
//       console.log('return useeffect age');
//     };
//   }, [age]);

//   // console.log('poza use effect');

//   return (
//     <div className="side-effects">
//       <button
//         className="side-effects-button-value"
//         onClick={() => setValue(value + 1)}
//       >
//         set value
//       </button>
//       <div>{value}</div>
//       <hr />
//       <button
//         className="side-effects-button-age"
//         onClick={() => setAge(age + 1)}
//       >
//         set age
//       </button>
//       <div>{age}</div>
//     </div>
//   );
// }

//przykład Kamila:
// export function SideEffects() {
//   const [data, setData] = useState([]);

//   const [error, setError] = useState(false);

//   function loadData(countryName) {
//     return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
//       (res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           return Promise.reject(`Http error: ${res.status}`);
//         }
//       }
//     );
//   }

//   useEffect(() => {
//     loadData('Poland')
//       .then((res) => {
//         setData(res);
//       })

//       .catch(() => {
//         setError(true);
//       });
//   }, []);

//   return (
//     <div className="side-effects">
//       <div>{data.length === 0 && error === false && 'loading....'}</div>

//       <div>{data.length > 0 && data[0].fifa}</div>

//       <div>{error && 'error!'}</div>
//     </div>
//   );
// }

//drugi przykład Kamila:
// export function SideEffects() {
//   useEffect(() => {
//     function checkDataA() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ok1'), 2000);
//       });
//     }

//     function checkDataB() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ok2'), 2000);
//       });
//     }

//     function checkDataC() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ok3'), 2000);
//       });
//     }

//     function checkDataD() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ok4'), 2000);
//       });
//     }

//     checkDataA()
//       .then(checkDataB)
//       .then(checkDataC)
//       .then(checkDataD)
//       .then((res) => {
//         console.log(res);
//       });
//   }, []);

//   return <div className="side-effects"></div>;
// }
