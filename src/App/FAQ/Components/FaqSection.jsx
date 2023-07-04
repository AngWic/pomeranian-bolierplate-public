import { useState } from 'react';
import { ArrowIcon } from '../../Components/Icons/ArrowIcon';
import './styles.css';

export const FaqSection = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState();

  const toggleVisibility = () => {
    setShowAnswer(!showAnswer);
  };

  const arrowIconRotatedClass = 'arrow-icon-rotated';
  const isArrowIconRotated = !showAnswer;

  return (
    <div className="faq-section">
      <div className="question" onClick={toggleVisibility}>
        <ArrowIcon
          className={`arrow-icon ${
            isArrowIconRotated ? arrowIconRotatedClass : ''
          }`}
        />
        {question}
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
  );
};
