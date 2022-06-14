
const app = document.querySelector('body');

const header = `
    <header>
        <h1>Leaderboard</h1>
    </header>
`;


const renderHeader = () => {
    app.insertAdjacentHTML('afterbegin', header);
  };

  export default renderHeader;