import React, { useState, useEffect } from 'react';
import HoneycombCell from './HoneycombCell';
import { Form, Button } from 'react-bootstrap';
import { loadLetters } from '../functions/loadLetters';
import $ from 'jquery';
import styles from './Board.module.scss';

const { REACT_APP_WORDSAPI_KEY } = process.env;

export default function Board() {
  const [middleLetter, setMiddleLetter] = useState('');
  const [outerLetters, setOuterLetters] = useState('');
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const startGame = () => {
      const lettersArray = loadLetters();
    };
  }, []);

  return (
    <div className={styles.gameArea}>
      <div>
        <div>
          <HoneycombCell middleLetter outerLetters />
        </div>
      </div>
    </div>
  );
}
