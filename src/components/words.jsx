import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { context } from '../App';
import Word from './sub-Components/word';

const Words = () => {
  const { paused, words, failed, initiateGame, currentKey, setCurrentKey, level, setLevel } = useContext(context);
  let delay = 1;
  const [unTouched, setUnTouched] = useState(words);
  const [touched, setTouched] = useState([]);
  const [activeWord, setActiveWord] = useState(null);
  const [done, setDone] = useState(true);
  const [pureKey, setPureKey] = useState('');

  useEffect(()=>{
    setDone(true);
    setActiveWord([]);
    setCurrentKey('');
    setUnTouched(words);
    setTouched([]);
  }, [words])

  useEffect(() => {
    if (currentKey !== '') {
      setPureKey(currentKey);
    }
  }, [currentKey]);
  
  useEffect(() => {
    setUnTouched(words);
  }, []);


  useEffect(() => {
    const arr = unTouched.slice().reverse();
    arr.forEach(element => {
      if ((element.word).toLowerCase().startsWith(pureKey.toLowerCase()) && pureKey !== "") {
        if (done && !failed && !paused) {
          setActiveWord(element);
          setDone(false);
        }
      }
    });
  }, [pureKey]);

  useEffect(()=>{
    const len_touched = touched.length;
    const len_unTouched = words.length;
    const test = (len_touched === len_unTouched);
    if (test) {
      setLevel(level+1)
      initiateGame();
    }
  }, [touched]);

  useEffect(() => {
    if (activeWord !== null && done) {
      setUnTouched(unTouched.filter(i => i !== activeWord));
      setTouched([...touched, activeWord]);
    }
  }, [done]);

  return (
    <div className={`words ${failed && "end"} ${paused && "paused"}`}>
      <div className="float">{paused ? `Paused` : `level ${level}`}</div>
      <section>
        {words.map(word => (<Word
          word={word.word}
          isActive={activeWord === null ? false : activeWord.id === word.id}
          activeWord={activeWord}
          setActiveWord={setDone}
          touched={touched}
          id={word.id}
          delay={delay += 4}
          key={word.id}
          left={word.left}
        />))}
      </section>
    </div>
  )
}

export default Words;