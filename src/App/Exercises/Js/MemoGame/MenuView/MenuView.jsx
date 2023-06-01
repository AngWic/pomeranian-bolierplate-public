import { HitTheMoleButton } from '../../HitTheMoleGame/HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleMenu } from '../../HitTheMoleGame/HitTheMoleMenu/HitTheMoleMenu';
import { HitTheMoleSelector } from '../../HitTheMoleGame/HitTheMoleSelector/HitTheMoleSelector';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <HitTheMoleMenu label="Rozmiar planszy">
        <HitTheMoleSelector
          optionsForMoles={[
            { label: '8 elementów', value: 8, isActive: true },
            { label: '16 elementów', value: 16, isActive: false },
          ]}
        />
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Przyciski sterujące">
        <HitTheMoleButton onClick={() => setGameStarted(true)}>
          Start
        </HitTheMoleButton>
      </HitTheMoleMenu>
    </>
  );
};
