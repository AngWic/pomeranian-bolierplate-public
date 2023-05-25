import { useState } from 'react';
import { HitTheMoleButton } from '../HitTheMoleButton/HitTheMoleButton';

export const HitTheMoleSelector = (props) => {
  const { optionsForMoles } = props;

  console.log(optionsForMoles);

  const [moles, setMoles] = useState(1);

  const molesAmountOptions = [
    { value: 1, label: '1 kret' },
    { value: 2, label: '2 krety' },
    { value: 3, label: '3 krety' },
  ];

  return (
    <>
      {molesAmountOptions.map(({ value, label }) => {
        return (
          <HitTheMoleButton
            isActive={moles === value}
            onClick={() => setMoles(value)}
          >
            {label}
          </HitTheMoleButton>
        );
      })}
    </>
  );
};
