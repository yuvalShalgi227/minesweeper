type HeaderProps = {
  resetGame: () => void;
  mineCount: number;
  elapsedTime: number;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Header: React.FC<HeaderProps> = ({
  resetGame,
  mineCount,
  elapsedTime,
  gameOver,
  didWin,
}: {
  resetGame: () => void;
  mineCount: number;
  elapsedTime: number;
  gameOver: boolean;
  didWin: boolean;
}) => {
  const didLose = gameOver && !didWin;
  const showPlay = "🙂";
  const showLose = "😵";

  return (
    <div className="header">
      <div className="header-inner mine-counter">
        {/* Show the number of mines remaining */}
        {mineCount}
      </div>
      <div className="header-inner reset-button" onClick={resetGame}>
        {didLose ? showLose : showPlay}
      </div>
      <div className="header-inner timer">
        {/* Show the elapsed time */}
        {elapsedTime}
      </div>
    </div>
  );
};

export default Header;
