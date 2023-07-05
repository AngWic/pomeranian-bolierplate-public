import './styles.css';

const myText = 'ala_ma_kota_a_tomek_ma_psa';

//działa, ale nie jest uniwersalne:

// let myText1 = myText.replace('a', 'A');
// let myText2 = myText1.replaceAll('_', ' ');
// let myText3 = myText2.replace('psa', 'psa.');

// console.log(myText3);

//wersja uniwersalna:

let spaceReplacement = myText.replaceAll('_', ' ').substring(1);
let firstLetter = myText.substring(0, 1);
let firstLetterToUpper = firstLetter.toUpperCase();

const changedText = firstLetterToUpper + spaceReplacement + '.';

export const EmptyValuesAndComments = () => {
  return (
    <div>
      <p>{myText}</p>
      <p>
        <b>changes into</b>
      </p>
      <p>{changedText}</p>
      <hr />
    </div>
  );
};

// const arr = ['ślimak', 'zegarek', 'auto', 'kanapa', 'placek'];

// const numbers = [5, 8, 3, 12, 1, 2];

// export const EmptyValuesAndComments = () => {
//   return (
//     <div>
//       {arr
//         .sort((a, b) => {
//           return a.localeCompare(b);
//         })
//         .map((item) => {
//           return <p>{item}</p>;
//         })}
//       {numbers
//         .sort((a, b) => a - b)
//         .reverse()
//         .map((item) => {
//           return <p>{item}</p>;
//         })}
//     </div>
//   );
// };

// to jest komenatrz
// to też
// taki komentarz może zostać dopisany za linią kodu

/* to jest
komentarz liniowy*/
