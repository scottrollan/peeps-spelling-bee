import axios from 'axios';
import solve from 'spelling-bee-solver';

const { REACT_APP_WORDSAPI_KEY } = process.env;

export const loadLetters = (arr) => {
  let array = [];
  arr.forEach(async (w) => {
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${w}`,
      headers: {
        'X-RapidAPI-Key': REACT_APP_WORDSAPI_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      const word = response.data;
      console.log(word);
      if (word.frequency && word.results) {
        array = [...array, w];
        console.log(array);
      }
    } catch (error) {
      const errorMessage = error;
      console.error(errorMessage);
    }
    return array;
  });
};
