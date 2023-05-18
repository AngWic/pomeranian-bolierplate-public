import './styles.css';
import { useState } from 'react';

export function BooleanExercises() {
  const [number, setNumber] = useState();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const circleArea = (number) => {
    if (number < 1) {
      return 'Liczba musi być większa od 0';
    } else if (number > 10) {
      return 'Liczba nie może być większa niż 10';
    } else if (number % 2 === 0) {
      return Math.PI * number * number;
      // Math.PI * Math.pow(number, 2)?????;
    } else {
      return 'Liczba musi być parzysta';
    }
  };

  console.log(circleArea(number));

  return (
    <div>
      <p>Wpisz liczbę parzystą w przedziale od 1 do 10:</p>
      <br />
      <input type="number" value={number} onChange={handleChange} />
      <p>Pole koła wynosi: {circleArea}</p>
      {/* <p>
        Function <b>canDrive</b> result:
        <p>{canDrive(age, hasDriverLicense, hasCar)}</p>
      </p>
      <hr />
      <p>
        Function <b>canDrive2</b> result:
        <p>{canDrive2(age, hasDriverLicense, hasCar)}</p>
      </p> */}
    </div>
  );
}

// let age = 18;
// let hasDriverLicense = true;
// let hasCar = true;

// function canDrive(age, hasDriverLicense, hasCar) {
//   if (age >= 18) {
//     if (hasDriverLicense) {
//       if (hasCar) {
//         return 'You can drive your car!';
//       } else {
//         return 'You can drive a rental car.';
//       }
//     } else {
//       return "You can't drive without a driver's license.";
//     }
//   } else {
//     return 'You are too young to drive.';
//   }
// }

// const canDrive2 = (age, hasDriverLicense, hasCar) => {
//   if (age < 18) {
//     return 'You are too young to drive.';
//   }
//   if (!hasDriverLicense) {
//     return "You can't drive without a driver's license.";
//   }
//   if (hasDriverLicense) {
//     return 'You can drive a rental car.';
//   }
//   if (hasCar) {
//     return 'You can drive your car!';
//   }
// };

//SWITCH NIE ZADZIAŁA PRZY WIĘCEJ NIŻ JEDNEJ ZMIENNEJ
// let result = true;

// const driversAge = 18;
// const driversLicense = true;
// const driversCar = true;

// switch ((driversAge, driversLicense, driversCar)) {
//   case 1:
//     result = 'You can drive your car!';
//     break;
//   case 2:
//     result = 'You can drive a rental car.';
//     break;
//   case 3:
//     result = "You can't drive without a driver's license.";
//     break;
//   default:
//     result = 'You are too young to drive.';
//     break;
// }

// console.log(result);

//SWITCH NIE ZADZIAŁA PRZY WIĘCEJ NIŻ JEDNEJ ZMIENNEJ

//SWITCH ZADZIAŁA:
// let result = '';
// const animal = 'horse';

// if (animal === 'cat') {
//   result = 'Wybrane zwierzę to kot';
// } else if (animal === 'dog') {
//   result = 'Wybrane zwierzę to pies';
// } else if (animal === 'mouse') {
//   result = 'Wybrane zwierzę to mysz';
// } else {
//   result = 'Nie znam tego zwierzęcia';
// }

// console.log('Result: ', result);

//ALBO

// console.log(6 % 2);
// console.log(Math.random(3));

// export function BooleanExercises() {
//   const value1 = 3;
//   // const value2 = true;
//   // const value3 = true;

//   let result = false;

//   if (value1 === 1) {
//     result = 'jeden';
//   } else if (value1 === 2) {
//     result = 'dwa';
//   } else if (value1 === 3) {
//     result = 'trzy';
//   } else {
//     result = 'inna cyfra';
//   }

//   //albo

//   switch (value1) {
//     case 1:
//       result = 'jeden';
//       break;
//     case 2:
//       result = 'dwa';
//       break;
//     case 3:
//       result = 'trzy';
//       break;
//     default:
//       result = 'inna cyfra';
//       break;
//   }

//   //albo

//   result = value1 >= 1 && value1 <= 3 ? 'mieści się w zakresie'

//   console.log(result);

// let condition = false;

// if (value1 && value2) {

//   condition = value2 || value3;

//   // if (value2 || value3) {
//   //   condition = true;
//   // } else {
//   //   condition = false;
//   // }
// } else {
//   condition = false;
// }

//   return <div>Operatory logiczne {condition && <h1>tajny tekst</h1>}</div>;
// }

// let result = 10;

// for (let i = 1; i <= 5; i++) {
//   result = result + 1;
// }

// console.log(result);

// export function BooleanExercises() {
//   const value1 = false;
//   const value2 = true;
//   const value3 = false;

//   const condition = value1 && !value2 && value3;

//   return <div>Operatory logiczne {condition && <h1>tajny tekst</h1>}</div>;
// }

// let result = 10;

// for (let i = 1; i <= 5; i++) {
//   result = result + 1;
// }

// console.log(result);

// export function BooleanExercises() {
//   const p = true;
//   const q = false;

//   const condition1 = !(p && q);
//   const condition2 = !p || !q;

//   console.log(condition1 === condition2);

//   return <div>Operatory logiczne {condition1 && <h1>tajny tekst</h1>}</div>;
// }
