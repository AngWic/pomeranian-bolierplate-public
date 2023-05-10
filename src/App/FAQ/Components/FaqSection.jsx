import { useState } from 'react';
import { ArrowIcon } from '../../Components/Icons/ArrowIcon';
import './styles.css';

export const FaqSection = (props) => {
  const { question, answer } = props;
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
        {props.question}
      </div>
      {showAnswer && <div className="answer">{props.answer}</div>}
    </div>
  );
};
