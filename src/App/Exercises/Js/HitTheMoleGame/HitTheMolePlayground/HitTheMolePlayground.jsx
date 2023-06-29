import { useState } from 'react';
import { useEffect } from 'react';
import { MoleIcon } from '../../../../Components/Icons/MoleIcon';
import './HitTheMolePlayground.css';

function getRandomInd(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

const fields = [
  // wsad początkowy
  { id: 1, wasClicked: false },
  { id: 2, wasClicked: false },
  { id: 3, wasClicked: false },
  { id: 4, wasClicked: false },
  { id: 5, wasClicked: false },
  { id: 6, wasClicked: false },
  { id: 7, wasClicked: false },
  { id: 8, wasClicked: false },
  { id: 9, wasClicked: false },
  { id: 10, wasClicked: false },
];

export const HitTheMolePlayground = ({ gameScore, setGameScore }) => {
  // const randomIndex = getRandomInd(10);

  // const fieldsWithRandomIndex = fields.map((field) => {
  //   return {
  //     ...field,
  //     isMolePresent: field.id === randomIndex,
  //   };
  // });

  //---------------po losowaniu---------------

  const [modifiedFields, setModifiedFields] = useState(fields); //wcześniej: fieldsWithRandomIndex
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInd(10));
  // const [clickedFieldId, setModifiedFields] = useState(fields);

  useEffect(() => {
    setInterval(() => {
      const newRandomIndex = getRandomInd(10);
      setFieldWithMoleId(newRandomIndex);
    }, 1000);
  }, []);

  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => {
          return {
            ...field,
            wasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleScoreUpdate = (isMolePresentFlag) => {
    if (isMolePresentFlag) {
      setGameScore(gameScore + 1);
    } else {
      setGameScore(gameScore - 1);
    }
  };

  const handleClick = (clickedField, isMolePresentFlag) => {
    //ustawienie stanu "was clicked?"

    setModifiedFields(
      modifiedFields.map((field) => {
        return {
          ...field,
          wasClicked: clickedField.id === field.id,
        };
      })
    );
    //reset stanu "was clicked?"
    resetClickFlags();
    //policzenie punktów
    handleScoreUpdate(isMolePresentFlag);
  };

  return (
    <div className="playground-moles">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;

        const isClickedFieldWithMole =
          isMolePresent && field.wasClicked ? ' field-moles-green' : '';

        const isClickedFieldWithoutMole =
          !isMolePresent && field.wasClicked ? ' field-moles-red' : '';

        return (
          <div
            className={`field-moles${isClickedFieldWithMole}${isClickedFieldWithoutMole}`}
            key={field.id}
            onClick={() => handleClick(field, isMolePresent)}
          >
            {isMolePresent && <MoleIcon />}
          </div>
        );
      })}
    </div>
  );
};
