const scoreBoard = document.getElementById('scores-board');

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// Create new game
const createGame = async (data) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',{
        method: 'POST',       
        headers: {
            'Content-Type': 'application/json'          
          },
        body: JSON.stringify(data)
    })
    return response.json();
}


const setScore = async (data, id) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
        method: 'POST',       
        headers: {
            'Content-Type': 'application/json'          
          },
        body: JSON.stringify(data)
    })
    return response.json();
};


// const fetchData = async (baseURL, endpoint) => {
//     const url = baseURL + endpoint;
//     const response = await fetch(url);
// }



export { createGame, setScore };

