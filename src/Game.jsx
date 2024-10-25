import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMove, resetGame } from './gameSlice';
import './index.css';

const Game = () => {
  const dispatch = useDispatch();
  const { playerMove, opponentMove, playerScore, opponentScore, result } = useSelector((state) => state.game);

  const handleMove = (move) => {
    dispatch(chooseMove(move));
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Rock, Paper, Scissors</h2>
      <div className="scoreboard">
        <p>Player Score: <span>{playerScore}</span></p>
        <p>Opponent Score: <span>{opponentScore}</span></p>
      </div>
      <div className="buttons-container">
      <button onClick={() => handleMove('rock')} className="move-button rock-button">
  <img src="https://img.icons8.com/emoji/96/000000/rock-emoji.png" alt="Rock" />
</button>
<button onClick={() => handleMove('paper')} className="move-button paper-button">
  <img src="https://img.icons8.com/emoji/96/000000/page-facing-up.png" alt="Paper" />
</button>
<button onClick={() => handleMove('scissors')} className="move-button scissors-button">
  <img src="https://img.icons8.com/emoji/96/000000/scissors-emoji.png" alt="Scissors" />
</button>





      </div>
      <div className="results">
        <p>Player chose: <span>{playerMove}</span></p>
        <p>Opponent chose: <span>{opponentMove}</span></p>
        <p className={`result-text ${result}`}>Result: <span>{result.toUpperCase()}</span></p>
      </div>
      <button onClick={handleReset} className="reset-button">Reset Game</button>
    </div>
  );
};

export default Game;
