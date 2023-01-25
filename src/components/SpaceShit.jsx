import React, { useContext } from 'react';
import { context } from '../App';

const SpaceShit = ({playHandler,left}) => {
  const { words, failed } = useContext(context);
    return (
        <div className="ship" onClick={()=>playHandler(" ")}>
            <div>
                {!failed && <div style={{left: `${left}%`}} className="s1 s-r"><img src="sprites/ship-sp.png" alt="" /></div>}
                <div style={{left: `${left}%`}} className="s2 s-r"><img src="sprites/ship-sp002.png" alt="" /></div>
            </div>
        </div>
    )
}

export default SpaceShit;