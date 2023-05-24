import './HitTheMoleButton.css';

export const HitTheMoleButton = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
