import { useState } from 'react';
import { HitTheMoleButton } from '../HitTheMoleButton/HitTheMoleButton';

export const HitTheMoleSelector = (props) => {
  const { options, setValue } = props;

  console.log(options);

  const [newOptions, setNewOptions] = useState(options);

  function handleClick(value) {
    setValue(value);

    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  }

  console.log(newOptions);

  return (
    <>
      {newOptions.map(({ label, value, isActive }) => (
        <HitTheMoleButton
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </HitTheMoleButton>
      ))}
    </>
  );
};

// //MOŻNA UŻYWAĆ JAKO UNIWERSALNY KOD:

// export const HitTheMoleSelector = ({ optionsForMoles }) => {
//   const [modifiedOptionsForMoles, setModifiedOptionsForMoles] =
//     useState(optionsForMoles);

//   // const findActiveButton = modifiedOptionsForMoles.find(
//   //   (objMol) => objMol.isActive
//   // );

//   // const [selectedValue, setSelectedValue] = useState(findObject.value);

//   const hanldeClickSelected = (clickedSelectedButtonValue) => {
//     setModifiedOptionsForMoles(
//       modifiedOptionsForMoles.map((optionForMole) => {
//         return {
//           ...optionForMole, // <-spread operator == można użyć żeby nadpisać jakąś wartość w obiekcie
//           isActive: clickedSelectedButtonValue === optionForMole.value,
//         };
//       })
//     );
//   };

//   return (
//     <>
//       {modifiedOptionsForMoles.map((objMol) => {
//         const { value, label, isActive } = objMol;
//         return (
//           <HitTheMoleButton
//             isActive={isActive}
//             onClick={() => hanldeClickSelected(value)}
//             key={value}
//           >
//             {label}
//           </HitTheMoleButton>
//         );
//       })}
//     </>
//   );
// };
