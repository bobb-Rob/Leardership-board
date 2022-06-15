const app = document.getElementById('content');

const recentScore = `
<section class="score-section">
            <div>
                <h3 class="score-header">Recent scores</h3>
                <button type="button" class="btn btn-refresh">Refresh</button>
            </div>
            <div class="score-wrap">
                <ul id="scores-board" class="scores">
                    <li>Name: 100</li>
                    <li>Name: 20</li>
                    <li>Name: 50</li>
                    <li>Name: 78</li>
                    <li>Name: 125</li>
                    <li>Name: 77</li>
                    <li>Name: 42</li>
                </ul>
            </div>
        </section>`;

const renderRecentScore = () => {
  app.insertAdjacentHTML('afterbegin', recentScore);
};

export default renderRecentScore;