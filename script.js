document.addEventListener('DOMContentLoaded', () => {
    
    const NUMERO_PERGUNTAS = 5;

    const telaInicio = document.getElementById('tela-inicio');
    const telaQuiz = document.getElementById('tela-quiz');
    const inicioForm = document.getElementById('inicio-form');
    const jogadorInput = document.getElementById('jogador');
    const dataInput = document.getElementById('data-jogo');
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

    if (dataInput) {
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();
        const hora = String(hoje.getHours()).padStart(2, '0');
        const minutos = String(hoje.getMinutes()).padStart(2, '0');
        
        dataInput.value = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function salvarPontuacaoLocal(identificador, pontuacao) {
        let ranking = JSON.parse(localStorage.getItem('quizRanking')) || {};
        ranking[identificador] = pontuacao;
        localStorage.setItem('quizRanking', JSON.stringify(ranking));
    }

    function iniciarQuiz() {
        const nomeJogador = jogadorInput.value.trim();
        const dataJogo = dataInput.value.trim();
        if (nomeJogador === '' || dataJogo === '') return;
        
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
            label.innerHTML = `<input type="radio" name="resposta" value="${opcao}" required> ${opcao}`;
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
        validarInput();
    }

    function validarInput() {
        if (!startButton) return;
        startButton.disabled = jogadorInput.value.trim() === '';
    }

    if (jogadorInput) {
        jogadorInput.addEventListener('keyup', validarInput);
        validarInput();
    }
    
    if (inicioForm) {
        inicioForm.addEventListener('submit', (event) => {
            event.preventDefault();
            iniciarQuiz();
        });
    }
    
    if (quizForm) {
        quizForm.addEventListener('submit', processarResposta);
    }
});