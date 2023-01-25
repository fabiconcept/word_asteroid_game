import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { context } from '../App';

const KeyStrokes = () => {
    const {setTest} = useContext(context);
    const [keyChar, setKeyChar] = useState('');
    const [pureKey, setPureKey] = useState('');

    useEffect(()=>{
        setPureKey(keyChar);
    }, [keyChar]);
    
    useEffect(()=>{
        setTest(pureKey);
    }, [pureKey]);

    function typeKey(params) {
        setKeyChar((params).toLowerCase())
    }

    window.addEventListener("keyup", e => {
        typeKey(e.key);
    });

    return (
        <div className="float">
            {/* <div>{pureKey}</div> */}
        </div>
    )
}

export default KeyStrokes;