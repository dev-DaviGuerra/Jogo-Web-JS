document.addEventListener('DOMContentLoaded', () => {
    const rankingContainer = document.getElementById('ranking-container');
    const ranking = JSON.parse(localStorage.getItem('quizRanking')) || {};

    if (Object.keys(ranking).length === 0) {
        rankingContainer.innerHTML = '<p>Nenhuma pontuação foi registrada ainda. Seja a primeira equipe a jogar!</p>';
        return;
    }
    
    // Converte o objeto em um array para ordenar pela pontuação
    const rankingArray = Object.entries(ranking).sort(([, a], [, b]) => b - a);

    let tableHTML = `
        <table class="ranking-table">
            <thead>
                <tr>
                    <th>Posição</th>
                    <th>Equipe</th>
                    <th>Pontuação Máxima</th>
                </tr>
            </thead>
            <tbody>
    `;

    rankingArray.forEach(([equipe, pontuacao], index) => {
        tableHTML += `
            <tr>
                <td>${index + 1}º</td>
                <td>${equipe}</td>
                <td>${pontuacao}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    rankingContainer.innerHTML = tableHTML;
});