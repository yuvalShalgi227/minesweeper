import "./App.scss";
import { Game } from "./components/Game.tsx";
function App() {
  return (
    <>
      <div>
        <h2>Minesweeper</h2>
      </div>
      <div className="game-wrapper">
        <Game />
      </div>
    </>
  );
}

export default App;
