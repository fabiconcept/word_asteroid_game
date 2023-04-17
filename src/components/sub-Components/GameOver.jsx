import React from 'react';
import { useContext } from 'react';
import { context } from '../../App';

const GameOver = () => {
  const { score, resetGame } = useContext(context);
  return (
    <div className="over">
      {score > 40 ? <span>Your score is {score}</span> : <span>You failed!</span>}
      <span onClick={resetGame}><img src="sprites/reset.png" alt="" /></span>
    </div>
  );
}

export default GameOver;