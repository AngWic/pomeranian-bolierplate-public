import { HitTheMoleButton } from '../../HitTheMoleGame/HitTheMoleButton/HitTheMoleButton';
import { HitTheMoleMenu } from '../../HitTheMoleGame/HitTheMoleMenu/HitTheMoleMenu';
import { HitTheMoleSelector } from '../../HitTheMoleGame/HitTheMoleSelector/HitTheMoleSelector';

export const MenuView = ({ setGameStarted, boardSize, setBoardSize }) => {
  return (
    <>
      <HitTheMoleMenu label="Rozmiar planszy">
        <HitTheMoleSelector
          options={[
            {
              label: '4 elements',
              value: 4,
              isActive: false,
            },
            {
              label: '8 elements',
              value: 8,
              isActive: false,
            },
            {
              label: '16 elements',
              value: 16,
              isActive: false,
            },
            {
              label: '20 elements',
              value: 20,
              isActive: false,
            },
          ]}
          // setBoardSize={setBoardSize} // to samo można zapisać:
          setValue={setBoardSize}
        />
      </HitTheMoleMenu>
      <HitTheMoleMenu label="Przyciski sterujące">
        <HitTheMoleButton
          onClick={() => setGameStarted(true)}
          isDisabled={boardSize === 0}
        >
          Start
        </HitTheMoleButton>
      </HitTheMoleMenu>
    </>
  );
};
