import "./App.scss";
import { Board } from "./components/Board.tsx";
function App() {
  return (
    <>
      <div>
        <h1>Minesweeper</h1>
      </div>
      <div className="game-wrapper">
        <Board />
      </div>
    </>
  );
}

export default App;
