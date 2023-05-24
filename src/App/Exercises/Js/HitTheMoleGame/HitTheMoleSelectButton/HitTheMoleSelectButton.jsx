import { useState } from 'react';
import { HitTheMoleButton } from '../HitTheMoleButton/HitTheMoleButton';

export const HitTheMoleSelectButton = ({ options: givenOptions, onChange }) => {
  const initialOptions = givenOptions.map((option) => ({
    ...option,
    isActive: false,
  }));

  // export const HitTheMoleSelectButton = (props) => {
  //   const { options } = props;

  //   console.log(options);

  const [newOptions, setNewOptions] = useState(initialOptions);

  const handleClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };

  return (
    <>
      {newOptions.map({ label, value, isActive })}
      <HitTheMoleButton
        key={value}
        onClick={() => handleClick(value)}
        isActive={isActive}
      >
        {label}
      </HitTheMoleButton>
    </>
  );
};
