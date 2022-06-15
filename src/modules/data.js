// Create new game
const createGame = async (data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const setScore = async (data) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwS97TlFoKbsfoq1MUzG/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const fetchScore = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwS97TlFoKbsfoq1MUzG/scores`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export { createGame, setScore, fetchScore };
