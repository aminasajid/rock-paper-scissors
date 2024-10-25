import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerMove: '',
  opponentMove: '',
  playerScore: 0,
  opponentScore: 0,
  result: '',  // win, lose, tie
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    chooseMove: (state, action) => {
      state.playerMove = action.payload;
      const moves = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * moves.length);
      state.opponentMove = moves[randomIndex];

      // Determine result
      if (state.playerMove === state.opponentMove) {
        state.result = 'tie';
      } else if (
        (state.playerMove === 'rock' && state.opponentMove === 'scissors') ||
        (state.playerMove === 'scissors' && state.opponentMove === 'paper') ||
        (state.playerMove === 'paper' && state.opponentMove === 'rock')
      ) {
        state.result = 'win';
        state.playerScore += 1;
      } else {
        state.result = 'lose';
        state.opponentScore += 1;
      }
    },
    resetGame: (state) => {
      state.playerMove = '';
      state.opponentMove = '';
      state.playerScore = 0;
      state.opponentScore = 0;
      state.result = '';
    },
  },
});

export const { chooseMove, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
