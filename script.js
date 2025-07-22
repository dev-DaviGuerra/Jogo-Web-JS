const NUMERO_PERGUNTAS = 5;

// Selecionando os elementos do HTML
const telaInicio = document.getElementById('tela-inicio');
const telaQuiz = document.getElementById('tela-quiz');
const inicioForm = document.getElementById('inicio-form');
const equipeInput = document.getElementById('equipe');
const startButton = document.getElementById('startButton');

const fimDeJogoBox = document.getElementById('fim-de-jogo-box');
const fimDeJogoTitulo = document.getElementById('fim-de-jogo-titulo');
const pontuacaoFinalTexto = document.getElementById('pontuacao-final-texto');

const nomeEquipeSpan = document.getElementById('nome-equipe');
const pontuacaoAtualSpan = document.getElementById('pontuacao-atual');
const numeroPerguntaSpan = document.getElementById('numero-pergunta');
const textoPerguntaH2 = document.getElementById('texto-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');
const quizForm = document.getElementById('quiz-form');

// Função para embaralhar um array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function salvarPontuacaoLocal(equipe, pontuacao) {
    let ranking = JSON.parse(localStorage.getItem('quizRanking')) || {};

    if (!ranking[equipe] || pontuacao > ranking[equipe]) {
        ranking[equipe] = pontuacao;
    }

    localStorage.setItem('quizRanking', JSON.stringify(ranking));
}

function iniciarQuiz() {
    const nomeEquipe = equipeInput.value.trim();
    if (nomeEquipe === '') return;

    shuffleArray(todasAsPerguntas);
    const perguntasSelecionadas = todasAsPerguntas.slice(0, NUMERO_PERGUNTAS);

    // Salva o estado do jogo na sessão do navegador
    sessionStorage.setItem('quizState', JSON.stringify({
        equipe: nomeEquipe,
        perguntas: perguntasSelecionadas,
        pontuacao: 0,
        perguntaAtual: 0
    }));

    telaInicio.classList.add('hidden');
    telaQuiz.classList.remove('hidden');
    mostrarPergunta();
}

function mostrarPergunta() {
    let state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) return;

    if (state.perguntaAtual >= NUMERO_PERGUNTAS) {
        mostrarFimDeJogo();
        return;
    }

    const pergunta = state.perguntas[state.perguntaAtual];

    nomeEquipeSpan.textContent = `Equipe: ${state.equipe}`;
    pontuacaoAtualSpan.textContent = `Pontuação: ${state.pontuacao}`;
    numeroPerguntaSpan.textContent = `Pergunta ${state.perguntaAtual + 1} de ${NUMERO_PERGUNTAS}`;
    textoPerguntaH2.textContent = pergunta.pergunta;
    
    opcoesContainer.innerHTML = '';
    pergunta.opcoes.forEach(opcao => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="resposta" value="${opcao}" required>
            ${opcao}
        `;
        opcoesContainer.appendChild(label);
    });
}

function processarResposta(event) {
    event.preventDefault(); // Impede o recarregamento da página

    let state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) return;
    
    const respostaSelecionada = new FormData(quizForm).get('resposta');
    const perguntaAnterior = state.perguntas[state.perguntaAtual];

    if (respostaSelecionada === perguntaAnterior.correta) {
        state.pontuacao++;
    }

    state.perguntaAtual++;
    sessionStorage.setItem('quizState', JSON.stringify(state));
    mostrarPergunta();
}

function mostrarFimDeJogo() {
    let state = JSON.parse(sessionStorage.getItem('quizState'));
    if (!state) return;

    salvarPontuacaoLocal(state.equipe, state.pontuacao);

    fimDeJogoTitulo.textContent = `Fim de Jogo, equipe "${state.equipe}"!`;
    pontuacaoFinalTexto.textContent = `Sua pontuação final foi: ${state.pontuacao} de ${NUMERO_PERGUNTAS}`;
    
    fimDeJogoBox.classList.remove('hidden');
    telaQuiz.classList.add('hidden');
    telaInicio.classList.remove('hidden');
    
    equipeInput.value = ''; // Limpa o input para o próximo jogo
    sessionStorage.removeItem('quizState'); // Limpa a sessão do jogo
}

// Lógica de validação do botão de início
function validarInput() {
    startButton.disabled = equipeInput.value.trim() === '';
}
document.addEventListener('DOMContentLoaded', validarInput);
equipeInput.addEventListener('keyup', validarInput);

// Event Listeners para o fluxo do jogo
inicioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    iniciarQuiz();
});
quizForm.addEventListener('submit', processarResposta);
