import './styles.css';

console.log(6 % 2);

export function BooleanExercises() {
  return <div>Operatory logiczne</div>;
}

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
