import renderRecentScore from './modules/recentScore.js';
import renderAddScore from './modules/addScore.js';
import './style.css';
import { createGame, setScore } from './modules/data.js'

renderRecentScore();
renderAddScore();


const getId = (result) => {
    const arr = result.split(' ');   
    return arr[3]
}

const gameID = createGame({name: "ghost recon"})
.then(data => {  
    console.log(getId(data.result));
    return getId(data.result); 
});


// Add Score Event
gameID.then(id => {
    const addScoreForm = document.querySelector('.add-score-form');
    addScoreForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name-input');
        const score = document.querySelector('#score-input');
    
        const newUserScore = {
            user: name.value,
            score: score.value
        };
        console.log(newUserScore)
        setScore(newUserScore, id)
        .then(response => {
            console.log(response)
        });
    
        name.value = '';
        score.value = ''
    })
})