import './HitTheMoleButton.css';

export const HitTheMoleButton = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`hit-the-mole-button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
