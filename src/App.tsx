import "./App.scss";
import { Game } from "./components/Game.tsx";
function App() {
  return (
    <>
      <div>
        <h1>Minesweeper</h1>
      </div>
      <div className="game-wrapper">
        <Game />
      </div>
    </>
  );
}

export default App;
