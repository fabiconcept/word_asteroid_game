import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { context } from '../App';

const KeyStrokes = () => {
    const { setCurrentKey } = useContext(context);

    function typeKey(params) {
        setCurrentKey((params.key).toLowerCase());
    }

    useEffect(() => {
        window.addEventListener('keyup', typeKey);
        return () => {
            window.removeEventListener('keyup', typeKey);
        };
    }, [typeKey]);
}

export default KeyStrokes;