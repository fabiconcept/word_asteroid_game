import React, { useContext, useEffect, useRef } from 'react';
import { context } from '../App';
import { useState } from 'react';

const SpaceShit = ({ playHandler, left }) => {
    const { failed, level } = useContext(context);
    const shipRef = useRef();
    const [myLeft, setMyLeft] = useState(0);

    useEffect(()=>{
        setMyLeft(left);
    }, [left]);
    
    useEffect(()=>{
        setMyLeft(50);
    }, [level]);

    const pauseHandler = (typedKey) =>{

        if (!failed && typedKey.code === "Space") {
            shipRef.current.click();
        }
    }

    useEffect(()=>{
        window.addEventListener("keypress", pauseHandler);
        return ()=>{
            window.removeEventListener("keypress", pauseHandler);
        }
    }, [pauseHandler]);

    return (
        <div className="ship" onClick={() => playHandler(" ")} ref={shipRef}>
            <div>
                {!failed && <div style={{ left: `${myLeft}%` }} className="s1 s-r"><img src="sprites/ship-sp.png" alt="" /></div>}
                <div style={{ left: `${myLeft}%` }} className="s2 s-r"><img src="sprites/ship-sp002.png" alt="" /></div>
            </div>
        </div>
    )
}

export default SpaceShit;