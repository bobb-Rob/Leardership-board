import renderRecentScore from './modules/recentScore.js';
import renderAddScore from './modules/addScore.js';
import './style.css';
import { createGame, setScore, fetchScore } from './modules/data.js';

renderRecentScore();
renderAddScore();

// const getId = (result) => {
//   console.log(result)
//   const arr = result.split(' ');
//   console.log(arr[3]);
//   return arr[3];
// };

// createGame({ name: 'ghost recon' })
//   .then((data) => getId(data.result));


const displayScore = (array) => {
  const scoresBoard = document.querySelector('#scores-board');
  array.forEach((element) => {
    const liEl = document.createElement('li');
    liEl.textContent = `${element.user}: ${element.score}`;
    scoresBoard.appendChild(liEl);
  });
};

const clearItems = () => {
  const scoresBoard = document.querySelector('#scores-board');
  while (scoresBoard.firstChild) {
    scoresBoard.removeChild(scoresBoard.firstChild);
  }
};

const displayAddMessage = (addForm, message, classNam) => {
  const span = document.createElement('span');
  span.className = classNam;
  span.textContent = message;
  addForm.appendChild(span);
  setTimeout(() => span.remove(), 4000);
};

// Add Score Event
const refreshBtn = document.querySelector('.btn-refresh');
const addScoreForm = document.querySelector('.add-score-form');

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name-input');
  const score = document.querySelector('#score-input');

  if (name.value === '' || score.value === '') {
    const message = 'One or two of the form field cannot be empty';
    displayAddMessage(addScoreForm, message, 'empty-message');
  } else {
    const newUserScore = {
      user: name.value,
      score: score.value,
    };
    setScore(newUserScore)
      .then((response) => {
        displayAddMessage(addScoreForm, response.result, 'add-message');
      });
    name.value = '';
    score.value = '';
  }
});

refreshBtn.addEventListener('click', () => {
  fetchScore().then((response) => {
    clearItems();
    displayScore(response.result);
  });
});
