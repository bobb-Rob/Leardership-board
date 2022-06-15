const setScore = async (data, id) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const fetchScore = async (id) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export { setScore, fetchScore };
