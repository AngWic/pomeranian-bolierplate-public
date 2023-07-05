import { useState } from 'react';
import { HitTheMoleButton } from '../HitTheMoleButton/HitTheMoleButton';

export const HitTheMoleSelectButton = (props) => {
  const { options, setValue } = props;
  // const initialOptions = givenOptions.map((option) => ({
  //   ...option,
  //   isActive: false,
  // }));

  // export const HitTheMoleSelectButton = (props) => {
  //   const { options } = props;

  //   console.log(options);

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

  return (
    <>
      {newOptions &&
        newOptions.map(({ label, value, isActive }) => (
          <HitTheMoleButton
            key={value}
            onClick={() => handleClick(value)}
            isActive={isActive}
          >
            {label}
          </HitTheMoleButton>
        ))}
      ;
    </>
  );
};
