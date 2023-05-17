import './styles.css';

let result = 10;

for (let i = 1; i <= 5; i++) {
  result = result + 1;
}

console.log(result);

export function BooleanExercises() {
  const p = true;
  const q = false;

  const condition1 = !(p && q);
  const condition2 = !p || !q;

  console.log(condition1 === condition2);

  return <div>Operatory logiczne {condition1 && <h1>tajny tekst</h1>}</div>;
}

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
