import './styles.css';

function Animal(name) {
  return {
    name: name,
    eat: function () {
      console.log(this.name + ' is eating');
    },
    sleep: function () {
      console.log(this.name + ' is sleeping');
    },
  };
}
console.log(Animal('Burek'));

export function JsPrototypes() {
  return (
    <>
      <h1 className="retro">RETRO</h1>
      <h1 className="disco">DISCO</h1>
      <h1 className="anaglyph">ANAGLYPH</h1>
      <h1 className="hamburger">hamburger</h1>
      <h1 className="neon">Neon</h1>
    </>
  );
}
