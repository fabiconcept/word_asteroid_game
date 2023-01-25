import React, { useContext } from 'react';
import { useEffect } from 'react';
import { context } from '../App';

const Scoreboard = () => {
  const { paused, scoreDiv } = useContext(context);

  const scrollEnd = ()=>{
    const div = document.getElementById("div");
    div.scrollTop = div.scrollHeight;
  }

  useEffect(()=>{
    scrollEnd();
  }, [scoreDiv]);

  return (
    <div className='score'>
      <span>Scoreboard:
        <div className="scoreDiv" id="div">
          {scoreDiv.map(i => <span key={`${Math.random().toString(25).slice(2)}`}>{i}</span>
          )}
        </div>
      </span>
      {paused && <span>Game paused</span>}
      {!paused && <span>Playing</span>}
    </div>
  )
}

export default Scoreboard;