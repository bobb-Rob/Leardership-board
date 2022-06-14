const app = document.getElementById('content');

const addScore = `
<section class="add-score-section">
            <form action="" class="add-score-form">
                <h3>Add your score</h3>
                <input type="text" placeholder="Your name" class="input-el"> <br>
                <input type="text" placeholder="Your score" class="input-el"> <br>
                <button type="button" class="btn add-score-btn">Submit</button>
            </form>
        </section>`;

const renderAddScore = () => {
  app.insertAdjacentHTML('beforeend', addScore);
};

export default renderAddScore;