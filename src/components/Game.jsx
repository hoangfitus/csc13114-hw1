import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../utils/gameLogic';

function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, row, col) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      {
        squares: nextSquares,
        location: { row, col },
      },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = 'Winner: ' + currentSquares[winner.squares[0]];
  } else if (currentSquares.every((square) => square)) {
    status = 'Draw! Game Over';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const moves = history.map((step, move) => {
    let description;
    if (move === currentMove) {
      description = `You are at move #${move}`;
      return (
        <li key={move}>
          <span>{description}</span>
          {step.location && ` (${step.location.row}, ${step.location.col})`}
        </li>
      );
    }

    description = move > 0 ? `Go to move #${move}` : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
          {step.location && ` (${step.location.row}, ${step.location.col})`}
        </button>
      </li>
    );
  });

  if (!isAscending) {
    moves.reverse();
  }

  function handleRestart() {
    setHistory([{ squares: Array(9).fill(null), location: null }]);
    setCurrentMove(0);
  }

  return (
    <div className="game-container">
      <div className="game-main">
        <div className="game-header">
          <h1 className="game-title">Tic Tac Toe</h1>
          <h2 className="game-status">{status}</h2>
        </div>
        <div className="game-board">
          <Board
            winningSquares={winner ? winner.squares : []}
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <div className="game-sidebar">
        <div className="game-controls">
          <button className="control-btn restart" onClick={handleRestart}>
            Restart Game
          </button>
          <button
            className="control-btn sort"
            onClick={() => setIsAscending(!isAscending)}
          >
            {isAscending ? 'Sort Descending' : 'Sort Ascending'}
          </button>
        </div>
        <div className="game-moves">
          <div className="game-moves-list">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
