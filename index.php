<?php

session_start();
require_once 'perguntas.php';

const NUMERO_PERGUNTAS = 5;


function salvarPontuacao($equipe, $pontuacao) {
    $arquivo = 'ranking.json';
    $ranking = [];

    if (file_exists($arquivo)) {
        $json_data = file_get_contents($arquivo);
        $ranking = json_decode($json_data, true);
    }

    if (!isset($ranking[$equipe]) || $pontuacao > $ranking[$equipe]) {
        $ranking[$equipe] = $pontuacao;
    }

    arsort($ranking);

    file_put_contents($arquivo, json_encode($ranking, JSON_PRETTY_PRINT));
}

if (isset($_POST['acao']) && $_POST['acao'] == 'iniciar' && !empty($_POST['equipe'])) {
    shuffle($todasAsPerguntas);
    $_SESSION['perguntas'] = array_slice($todasAsPerguntas, 0, NUMERO_PERGUNTAS);
    $_SESSION['pontuacao'] = 0;
    $_SESSION['pergunta_atual'] = 0;
    $_SESSION['equipe'] = htmlspecialchars($_POST['equipe']);
}

if (isset($_POST['resposta'])) {
    if (isset($_SESSION['pergunta_atual']) && isset($_SESSION['perguntas'])) {
        $indice_pergunta_anterior = $_SESSION['pergunta_atual'];
        $pergunta_anterior = $_SESSION['perguntas'][$indice_pergunta_anterior];

        if ($_POST['resposta'] == $pergunta_anterior['correta']) {
            $_SESSION['pontuacao']++;
        }
        $_SESSION['pergunta_atual']++;
    }
}

$jogo_iniciado = isset($_SESSION['perguntas']);
$indice_atual = $jogo_iniciado ? $_SESSION['pergunta_atual'] : 0;
$fim_de_jogo = $jogo_iniciado ? $indice_atual >= NUMERO_PERGUNTAS : false;

if ($fim_de_jogo) {
    if (isset($_SESSION['equipe'])) {
        salvarPontuacao($_SESSION['equipe'], $_SESSION['pontuacao']);
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz de porcentagem da Lidiane</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="container">
        
        <?php if (!$jogo_iniciado || $fim_de_jogo): ?>
            
            <h1>Quiz de Matemática</h1>
            <p>Yasmim Mattos, Ana Carollina Sena, Damiana Brandorfo, Manuela Gonçalves</p>
            
            <?php if ($fim_de_jogo): ?>
                <h2>Fim de Jogo, equipe "<?= $_SESSION['equipe'] ?? 'Equipe' ?>"!</h2>
                <p class="pontuacao">Sua pontuação final foi: <?= $_SESSION['pontuacao'] ?? '0' ?> de <?= NUMERO_PERGUNTAS ?></p>
                <?php session_destroy(); ?>
            <?php endif; ?>

            <form method="post" class="inicio-form">
                <input type="hidden" name="acao" value="iniciar">
                <label for="equipe">Digite o nome da Equipe:</label>
                <input type="text" name="equipe" id="equipe" required autocomplete="off">
                <button type="submit" id="startButton">Começar a Jogar!</button>
            </form>
            <a href="ranking.php" class="link-ranking">Ver Ranking de Equipes</a>

        <?php else: ?>
            
            <div class="quiz-header">
                <span class="nome-equipe">Equipe: <?= $_SESSION['equipe'] ?? 'Não definida' ?></span>
                <span class="pontuacao-atual">Pontuação: <?= $_SESSION['pontuacao'] ?? '0' ?></span>
            </div>
            
            <?php $pergunta = $_SESSION['perguntas'][$indice_atual]; ?>

            <div class="quiz-box">
                <p class="numero-pergunta">Pergunta <?= $indice_atual + 1 ?> de <?= NUMERO_PERGUNTAS ?></p>
                <h2><?= htmlspecialchars($pergunta['pergunta']) ?></h2>
                
                <form method="post">
                    <div class="opcoes">
                        <?php foreach ($pergunta['opcoes'] as $opcao): ?>
                            <label>
                                <input type="radio" name="resposta" value="<?= htmlspecialchars($opcao) ?>" required>
                                <?= htmlspecialchars($opcao) ?>
                            </label>
                        <?php endforeach; ?>
                    </div>
                    <button type="submit">Responder</button>
                </form>
            </div>
        <?php endif; ?>
    </div>

    <script>
        const equipeInput = document.getElementById('equipe');
        const startButton = document.getElementById('startButton');

        function validarInput() {
            if (equipeInput.value.trim() === '') {
                startButton.disabled = true;
            } else {
                startButton.disabled = false;
            }
        }

        document.addEventListener('DOMContentLoaded', validarInput);
        equipeInput.addEventListener('keyup', validarInput);
    </script>

</body>
</html>