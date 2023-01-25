import React, { useContext, useState } from 'react';
import { useEffect } from 'react'
import { context } from '../../App';

const Word = ({ word, isActive, left, activeWord, setActiveWord, id, touched, delay }) => {
    const [divChar, setDivChar] = useState([]);
    const [typed, setTyped] = useState(false);
    const [mark, setMark] = useState(0)
    const { score, setScore, paused, failed, setFailed, shots, setShots, setWordPosition} = useContext(context);

    useEffect(() => {
        touched.forEach(element => {
            if (element.id === id) {
                setTyped(true);
            }
        });
    }, [touched]);

    window.addEventListener("keypress", e => {
        const arr = divChar.filter(i => i.typed === false);
        const char = e.key;

        checkMatch(char, arr[0]);
    })

    const checkMatch = (val, arr) => {
        try {
            if (isActive && !failed && !paused) {
                const result = val.toLowerCase() === (arr.char).toLowerCase();

                if (result) {
                    setShots([...shots, Math.random().toString(25)]);
                    setDivChar(divChar.map(i => {
                        if (i.id === arr.id) {
                            return { ...arr, typed: result }
                        }
                        return i;
                    }))
                    setMark(mark + 10);
                }

            }
        } catch (error) {

        }
    }

    useEffect(() => {
        if (isActive) {
            const left = divChar.filter(i => i.typed === false);
            if (left.length === 0) {
                setActiveWord(true);
                setScore(score + mark);
            }
        }

    }, [divChar]);

    useEffect(() => {
        let chars = word.split('');
        let t = false;
        let arr = [];

        chars.forEach(element => {
            if (t === false) {
                arr.push({ char: element, id: Math.random().toString(25), typed: true });
                if (isActive) {
                    setShots([...shots, Math.random().toString(25)]);
                    setScore(score + 10)
                }
                t = true;
            } else {
                arr.push({ char: element, id: Math.random().toString(25), typed: false });
            }
        });

        setDivChar(arr);
        if (isActive) {
            setWordPosition(left);
        }

    }, [activeWord]);

    const animationEnd = () =>{
        if (!typed) {
            // setFailed(true);
        }
    }

    return (
        <div onAnimationEnd={animationEnd} className={`word ${isActive && !typed && "active"}`} style={{ left: `${left}%`, animationDelay: `${delay-4}s` }}>
            <div className="cont">
                {divChar.map(i => (<span className={`${i.typed && "typed"} ${typed && "hide"}`} key={i.id}>{i.char}</span>))}
                <img src="sprites/exp.gif" alt="" className={`${typed && 'sh'}`} />
            </div>
        </div>
    )
}

export default Word;