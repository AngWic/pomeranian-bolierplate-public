import './HitTheMoleButton.css';

export const HitTheMoleButton = ({
  children,
  isActive,
  onClick,
  isDisabled,
}) => {
  // let highlightClass;

  // //  if (isActive === true) {
  // //   highlightClass = 'hit-the-mole-button-active';
  // // } else {
  // //   highlightClass = '';
  // // }

  // if (isActive) {
  //   highlightClass = ' hit-the-mole-button-active';
  // } else {
  //   highlightClass = '';
  // }
  //POWYŻSZE MOŻNA SKRÓCIĆ:
  // const highlightClass = isActive ? ' hit-the-mole-button-active' : '';

  // const buttonClasses = 'hit-the-mole-button' + highlightClass;
  //POWYŻSZE MOŻNA SKRÓCIĆ:

  //   const buttonClasses =
  //     'hit-the-mole-button' + (isActive ? ' hit-the-mole-button-active' : '');
  // //MOŻNA ZAPISAĆ RÓWNIEŻ:
  //   const buttonClasses = `hit-the-mole-button ${
  //     isActive ? ' hit-the-mole-button-active' : ''
  //   }`;

  //   return (
  //     <button className={buttonClasses} onClick={onClick}>
  //       {' '}
  //       {children}
  //     </button>
  return (
    <button
      className={`hit-the-mole-button ${
        isActive ? 'hit-the-mole-button-active' : ''
      }`}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </button>
  );
};
