import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { context } from '../App';
import Shot from './sub-Components/Shot';

const ShotsFired = () => {
    const {shots, setShots, wordPosition } = useContext(context);
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        setPosition(wordPosition);
    }, [wordPosition]);
    return (
        <div className="shots">
            {shots.map(i=>(<Shot key={i} left={position} />))}
        </div>
    )
}

export default ShotsFired;