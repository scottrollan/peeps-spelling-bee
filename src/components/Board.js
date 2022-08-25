import React, { useState, useEffect } from 'react';
import HoneycombCell from './HoneycombCell';
import Input from './Input';
import CommandButtons from './CommandButtons';
import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';
// import solve from 'spelling-bee-solver';
// import { loadLetters } from '../functions/loadLetters';
import $ from 'jquery';
import styles from './Board.module.scss';

// const { REACT_APP_WORDSAPI_KEY } = process.env;

export default function Board() {
  const [middleLetter, setMiddleLetter] = useState('');
  const [outerLetters, setOuterLetters] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [guessLtrs, setGuessLtrs] = useState('');

  const setNewLtr = (l) => {
    setGuessLtrs(guessLtrs.concat(l));
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
      <Input guessLtrs={guessLtrs} />

      <div>
        <div>
          <HoneycombCell
            middleLetter={middleLetter}
            outerLetters={outerLetters}
            setNewLtr={setNewLtr}
          />
        </div>
      </div>
      <CommandButtons />
    </div>
  );
}
