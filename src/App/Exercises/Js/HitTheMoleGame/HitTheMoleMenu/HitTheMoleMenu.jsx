import './HitTheMoleMenu';

export const HitTheMoleMenu = ({ label, children }) => {
  return (
    <div className="hit-the-mole-menu">
      <div className="hit-the-mole-menu-label">{label}</div>
      {children}
    </div>
  );
};
