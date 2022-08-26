import React, { useState, useEffect } from 'react';
import HoneycombCell from './HoneycombCell';
import Progress from './Progress';
import MessageBox from './MessageBox';
import Input from './Input';
import CommandButtons from './CommandButtons';
import axios from 'axios';
import $ from 'jquery';
import styles from './Board.module.scss';

export default function Board() {
  const [puzzleInfo, setPuzzleInfo] = useState({
    middleLetter: '',
    outerLetters: [],
    solutions: [],
    possiblePoints: 0,
  });
  const [points, setPoints] = useState(0);
  const [guessLtrs, setGuessLtrs] = useState('');
  const [alreadyPlayed, setAlreadyPlayed] = useState([]);
  const [message, setMessage] = useState('Nice!');

  const setNewLtr = (l) => {
    setGuessLtrs(guessLtrs.concat(l));
  };

  const deleteLtr = () => {
    const ltrs = guessLtrs; //str
    const newLtrs = ltrs.slice(0, -1);
    setGuessLtrs(newLtrs);
  };

  const shuffle = () => {
    let ltrArr = puzzleInfo.outerLetters;
    for (let i = ltrArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = ltrArr[i];
      ltrArr[i] = ltrArr[j];
      ltrArr[j] = temp;
      setPuzzleInfo({ ...puzzleInfo, outerLetters: [...ltrArr] });
    }
  };

  const tryWord = () => {
    const allLetters = puzzleInfo.outerLetters.concat(puzzleInfo.middleLetter);
    console.log(allLetters);
    const solutionsArr = puzzleInfo.solutions;
    let guess = guessLtrs;
    let guessLength = guess.length;
    let hasBeenPlayed = alreadyPlayed.includes(guess);
    let validWord = solutionsArr.includes(guess);
    if (hasBeenPlayed) {
      setMessage('Already found!');
      setGuessLtrs('');
      return;
    }
    if (validWord && !hasBeenPlayed) {
      setAlreadyPlayed([...alreadyPlayed, guess]);
      let addPoints = points + guessLength;
      switch (true) {
        case guess.includes(allLetters[0]) &&
          guess.includes(allLetters[1]) &&
          guess.includes(allLetters[2]) &&
          guess.includes(allLetters[3]) &&
          guess.includes(allLetters[4]) &&
          guess.includes(allLetters[5]) &&
          guess.includes(allLetters[6]):
          setMessage('PANGRAM!!');
          addPoints = points + guessLength + 7;
          break;
        case guessLength === 4:
          setMessage('Good!');
          addPoints = points + 1;
          break;
        case guessLength === 5 || guessLength === 6:
          setMessage('Nice!');
          break;
        case guessLength > 6:
          setMessage('Awesome!');
          break;
        default:
          setMessage('Awesome!');
          break;
      }
      setPoints(addPoints);
    } else {
      setMessage('Not Found');
    }
    setGuessLtrs('');
  };

  useEffect(() => {
    let outerLtrs;
    let midLtr;
    let pts;
    let sol;

    const getNewPuzzle = async () => {
      let newPuzzleData = await axios.get('https://freebee.fun/cgi-bin/random');
      let newPuzzle = newPuzzleData.data;
      outerLtrs = newPuzzle.letters.split('');
      midLtr = newPuzzle.center;
      pts = newPuzzle.total;
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
          setPuzzleInfo({
            outerLetters: [...outerLtrs],
            middleLetter: midLtr,
            solutions: [...sol],
            possiblePoints: pts,
          });
          break;
      }
    };
    setPoints(0);
    setGuessLtrs('');
    getNewPuzzle();
  }, []);

  return (
    <div className={styles.gameArea}>
      <Progress
        points={points}
        percentage={Math.round((points / puzzleInfo.possiblePoints) * 100)}
      />
      <MessageBox message={message} />
      <Input guessLtrs={guessLtrs} />

      <HoneycombCell
        middleLetter={puzzleInfo.middleLetter}
        outerLetters={puzzleInfo.outerLetters}
        setNewLtr={setNewLtr}
      />

      <CommandButtons
        deleteLtr={deleteLtr}
        shuffle={shuffle}
        tryWord={tryWord}
      />
    </div>
  );
}
