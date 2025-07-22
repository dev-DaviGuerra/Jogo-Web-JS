document.addEventListener('DOMContentLoaded', () => {
    

    const rankingContainer = document.getElementById('ranking-container');
    const ranking = JSON.parse(localStorage.getItem('quizRanking')) || {};

    if (Object.keys(ranking).length === 0) {
        rankingContainer.innerHTML = '<p>Nenhuma pontuação foi registrada ainda. Seja o primeiro a jogar!</p>';
    } else {
        const rankingArray = Object.entries(ranking).sort(([, a], [, b]) => b - a);

        let tableHTML = `
            <table class="ranking-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Jogador</th>
                        <th>Pontuação Máxima</th>
                    </tr>
                </thead>
                <tbody>
        `;

        rankingArray.forEach(([jogador, pontuacao], index) => {
            tableHTML += `
                <tr>
                    <td>${index + 1}º</td>
                    <td>${jogador}</td>
                    <td>${pontuacao}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        rankingContainer.innerHTML = tableHTML;
    }


    const clearButton = document.getElementById('clear-ranking-btn');

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            const confirmar = confirm('Tem certeza que deseja apagar todo o ranking? Esta ação não pode ser desfeita.');

            if (confirmar) {
                localStorage.removeItem('quizRanking');
                
                location.reload();
            }
        });
    }
});