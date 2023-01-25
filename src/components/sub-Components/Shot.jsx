import React from 'react';
import { useRef } from 'react';

const Shot = ({left}) => {
    const shot = useRef();

    setTimeout(() => {
        try {
            shot.current.style.display = "none";
        } catch (error) {
            
        }
    }, 1000);

    return (
        <div className="gunshot" ref={shot} style={{left: `${left+1.2}%`}}>
            <img src="sprites/shoot-sp.png" alt="" />
        </div>
    )
}

export default Shot;