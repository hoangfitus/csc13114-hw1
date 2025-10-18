# 22127126 - Tic Tac Toe Game
## Live Demo

Visit the live demo at: [csc13114-hw1.vercel.app](https://csc13114-hw1.vercel.app)

## Self Assessment

- [x] For the current move only, show "You are at move #…" instead of a button: 1.8 points.

- [x] Rewrite the Board to use two loops to make the squares instead of hardcoding them: 1.8 points.

- [x] Add a toggle button that lets you sort the moves in either ascending or descending order: 1.8 points.

- [x] When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw): 1.8 points.

- [x] Display the location for each move in the format (row, col) in the move history list: 1.8 points.

- [x] Upload to a public host: 1 point.

## Running Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository

```bash
git clone https://github.com/hoangfitus/csc13114-hw1.git
```

2. Navigate to the project directory

```bash
cd csc13114-hw1
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

## Project Structure

```
src/
├── components/
│   ├── Board.jsx   # Game board component with dynamic grid generation
│   ├── Game.jsx    # Main game logic and state management
│   └── Square.jsx  # Individual square component
├── styles/
│   └── styles.css  # Styled with modern CSS features
├── utils/
│   └── gameLogic.js # Game logic utilities
├── App.jsx
└── main.jsx
```

## Technologies Used

- React + Vite for fast development and optimal production build
- Modern CSS (CSS Variables, Flexbox, Grid) for responsive design
- Vercel for seamless deployment and hosting
