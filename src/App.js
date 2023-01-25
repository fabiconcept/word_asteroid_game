import React, { useEffect } from 'react';
import { useState } from 'react';
import words_array from './components/resources/word_list';
import Scoreboard from './components/scoreboard';
import ShotsFired from './components/ShotsFired';
import SpaceShit from './components/SpaceShit';
import GameOver from './components/sub-Components/GameOver';
import Words from './components/words';

export const context = React.createContext();

const App = () => {
  const [shots, setShots] = useState([]);
  const [currentKey, setCurrentKey] = useState("");
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreDiv, setScoreDiv] = useState([]);

  const [wordPosition, setWordPosition] = useState(50);

  useEffect(() => {
    setScoreDiv([...scoreDiv, score]);
    setWordPosition(wordPosition + 0.15);
  }, [score]);

  const [words, setWords] = useState([]);

  const initiateGame = () =>{
    const word_list = words_array;
    const len_arr = word_list.length;
    let cont_arr = [];

    for (let index = 0; index < 10; index++) {
      const word_index = Math.floor((Math.random() * len_arr));
      const cWord = word_list[word_index];
      const cWord_id = Math.random().toString(25).slice(2);
      const cWord_left = Math.random() * 92;

      const arr_data = ({ left: cWord_left, word: cWord, id: cWord_id });

      cont_arr.push(arr_data);
    }

    setWords(cont_arr)
  }

  useEffect(() => {
    initiateGame();
  }, [])

  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(wordPosition);
  }, [wordPosition]);

  const playHandler = (e) => {
    if (e === " ") {
      setPaused(!paused);
    }
  }

  return (
    <context.Provider value={{ scoreDiv, score, setScore, initiateGame, currentKey, setCurrentKey, paused, failed, setFailed, words, shots, setShots, wordPosition, setWordPosition }}>
      <div className="app">
        <Scoreboard />
        <div className="canvas">
          <div className="board">
            <div className="bg1">
              <section>
                <img src="sprites/bg1.gif" alt="" />
                <img className='cov' src="sprites/bg2.gif" alt="" />
              </section>
            </div>
            {failed && <GameOver />}
            {words.length > 0 && <Words />}
            <ShotsFired />
            <SpaceShit playHandler={playHandler} left={position} />
          </div>
        </div>
      </div>
    </context.Provider>
  )
}

export default App;