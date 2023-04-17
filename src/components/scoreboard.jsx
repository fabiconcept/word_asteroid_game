import React, { useContext } from 'react';
import { useEffect } from 'react';
import { context } from '../App';

const Scoreboard = () => {
  const { paused, score, healthLeft } = useContext(context);

  return (
    <div className='score'>
      <span>Scoreboard:
        <div className="scoreDiv" id="div">
          {score}
        </div>
      </span>
      <span>
        {healthLeft > 2 && <img src="sprites/life.png" alt="" />}
        {healthLeft > 1 && <img src="sprites/life.png" alt="" />}
        {healthLeft > 0 && <img src="sprites/life.png" alt="" />}
      </span>
    </div>
  )
}

export default Scoreboard;