import './styles.css';

let result = 10;

for (let i = 1; i <= 5; i++) {
  result = result + 1;
}

console.log(result);

export function BooleanExercises() {
  const value1 = false;
  const value2 = true;
  const value3 = false;

  const condition = value1 && !value2 && value3;

  return <div>Operatory logiczne {condition && <h1>tajny tekst</h1>}</div>;
}
