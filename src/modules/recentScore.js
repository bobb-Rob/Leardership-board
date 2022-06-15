const app = document.getElementById('content');

const recentScore = `
<section class="score-section">
            <div>
                <h3 class="score-header">Recent scores</h3>
                <button type="button" class="btn btn-refresh">Refresh</button>
            </div>
            <div class="score-wrap">
                <ul id="scores-board" class="scores">
                    
                </ul>
            </div>
        </section>`;

const renderRecentScore = () => {
  app.insertAdjacentHTML('afterbegin', recentScore);
};

export default renderRecentScore;