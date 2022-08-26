import React, { useState, useEffect } from 'react';
import HoneycombCell from './HoneycombCell';
import MessageBox from './MessageBox';
import Input from './Input';
import CommandButtons from './CommandButtons';
import axios from 'axios';
import $ from 'jquery';
import styles from './Board.module.scss';

export default function Board() {
  const [middleLetter, setMiddleLetter] = useState('');
  const [outerLetters, setOuterLetters] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [guessLtrs, setGuessLtrs] = useState('');
  const [message, setMessage] = useState('|');

  const setNewLtr = (l) => {
    setGuessLtrs(guessLtrs.concat(l));
  };

  const shuffle = () => {
    let ltrArr = [...outerLetters];
    for (let i = ltrArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = ltrArr[i];
      ltrArr[i] = ltrArr[j];
      ltrArr[j] = temp;
      setOuterLetters([...ltrArr]);
    }
  };

  useEffect(() => {
    let outerLtrs;
    let midLtr;
    let possiblePoints;
    let sol;
    const getNewPuzzle = async () => {
      let newPuzzleData = await axios.get('https://freebee.fun/cgi-bin/random');
      let newPuzzle = newPuzzleData.data;
      outerLtrs = newPuzzle.letters.split('');
      midLtr = newPuzzle.center;
      possiblePoints = newPuzzle.total;
      sol = newPuzzle.wordlist;

      switch (true) {
        case sol.length > 49:
          getNewPuzzle();
          break;
        case sol.length < 16:
          getNewPuzzle();
          break;
        default:
          console.log(`Found a puzzle that meets your criteria`);
          setOuterLetters([...outerLtrs]);
          setMiddleLetter(midLtr);
          setSolutions([...sol]);
          break;
      }
    };
    getNewPuzzle();
  }, []);

  return (
    <div className={styles.gameArea}>
      <MessageBox message={message} />
      <Input guessLtrs={guessLtrs} />

      <HoneycombCell
        middleLetter={middleLetter}
        outerLetters={outerLetters}
        setNewLtr={setNewLtr}
      />

      <CommandButtons shuffle={shuffle} />
    </div>
  );
}
