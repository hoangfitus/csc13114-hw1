import Square from './Square';
import { calculateWinner } from '../utils/gameLogic';

export default function Board({ xIsNext, squares, onPlay, winningSquares }) {
  function handleClick(row, col) {
    const position = row * 3 + col;
    if (squares[position] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[position] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares, row, col);
  }

  const board = [];
  for (let row = 0; row < 3; row++) {
    const currentRow = [];
    for (let col = 0; col < 3; col++) {
      const position = row * 3 + col;
      currentRow.push(
        <Square
          key={position}
          value={squares[position]}
          onSquareClick={() => handleClick(row, col)}
          isWinning={winningSquares.includes(position)}
        />
      );
    }
    board.push(
      <div key={row} className="board-row">
        {currentRow}
      </div>
    );
  }

  return <div className="board">{board}</div>;
}
