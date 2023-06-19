type HeaderProps = {
  resetGame: () => void;
  mineCount: number;
  elapsedTime: number;
};

const Header: React.FC<HeaderProps> = ({
  resetGame,
  mineCount,
  elapsedTime,
}) => {
  return (
    <div className="header">
      <div className="mine-counter">
        {/* Show the number of mines remaining */}
        {mineCount}
      </div>
      <div className="reset-button" onClick={resetGame}>
        {/* Add your smiley face icon here */}
      </div>
      <div className="timer">
        {/* Show the elapsed time */}
        {elapsedTime}
      </div>
    </div>
  );
};

export default Header;
