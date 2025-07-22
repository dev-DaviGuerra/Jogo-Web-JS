const NUMERO_PERGUNTAS = 5;

// Selecionando os elementos do HTML
const telaInicio = document.getElementById('tela-inicio');
const telaQuiz = document.getElementById('tela-quiz');
const inicioForm = document.getElementById('inicio-form');
const jogadorInput = document.getElementById('jogador');
const dataInput = document.getElementById('data-jogo'); // Novo campo de data
const startButton = document.getElementById('startButton');

const fimDeJogoBox = document.getElementById('fim-de-jogo-box');
const fimDeJogoTitulo = document.getElementById('fim-de-jogo-titulo');
const pontuacaoFinalTexto = document.getElementById('pontuacao-final-texto');

const nomeJogadorSpan = document.getElementById('nome-jogador');
const pontuacaoAtualSpan = document.getElementById('pontuacao-atual');
const numeroPerguntaSpan = document.getElementById('numero-pergunta');
const textoPerguntaH2 = document.getElementById('texto-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');
const quizForm = document.getElementById('quiz-form');

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function salvarPontuacaoLocal(identificador, pontuacao) {
    let ranking = JSON.parse(localStorage.getItem('quizRanking')) || {};
    // Salva a pontuação para o identificador único (ex: "Davi - 22/07/2025")
    ranking[identificador] = pontuacao;
    localStorage.setItem('quizRanking', JSON.stringify(ranking));
}

function iniciarQuiz() {
    const nomeJogador = jogadorInput.value.trim();
    const dataJogo = dataInput.value.trim();
    if (nomeJogador === '' || dataJogo === '') return;

    // Combina nome e data para criar um identificador único para a jogada
    const identificadorJogador = `${nomeJogador} - ${dataJogo}`;

    shuffleArray(todasAsPerguntas);
    const perguntasSelecionadas = todasAsPerguntas.slice(0, NUMERO_PERGUNTAS);

    sessionStorage.setItem('quizState', JSON.stringify({
        jogador: identificadorJogador,
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

    nomeJogadorSpan.textContent = `Jogador: ${state.jogador}`;
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
    event.preventDefault();

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

    salvarPontuacaoLocal(state.jogador, state.pontuacao);

    fimDeJogoTitulo.textContent = `Fim de Jogo, ${jogadorInput.value.trim()}!`;
    pontuacaoFinalTexto.textContent = `Sua pontuação final foi: ${state.pontuacao} de ${NUMERO_PERGUNTAS}`;
    
    fimDeJogoBox.classList.remove('hidden');
    telaQuiz.classList.add('hidden');
    telaInicio.classList.remove('hidden');
    
    jogadorInput.value = '';
    sessionStorage.removeItem('quizState');
    validarInput(); // Desabilita o botão de começar novamente
}

// Lógica de validação do botão de início
function validarInput() {
    if (!startButton) return;
    startButton.disabled = jogadorInput.value.trim() === '';
}

// Preenche a data de hoje e adiciona os event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Formata a data para dd/mm/aaaa
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Meses são de 0-11
    const ano = hoje.getFullYear();
    dataInput.value = `${dia}/${mes}/${ano}`;
    
    validarInput();
});

jogadorInput.addEventListener('keyup', validarInput);
inicioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    iniciarQuiz();
});
quizForm.addEventListener('submit', processarResposta);