<?php
$arquivo = 'ranking.json';
$ranking = [];

if (file_exists($arquivo)) {
    $json_data = file_get_contents($arquivo);
    $ranking = json_decode($json_data, true);
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking das Equipes</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="container">
        <h1>🏆 Ranking das Equipes 🏆</h1>

        <?php if (empty($ranking)): ?>
            <p>Nenhuma pontuação foi registrada ainda. Seja a primeira equipe a jogar!</p>
        <?php else: ?>
            <table class="ranking-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Equipe</th>
                        <th>Pontuação Máxima</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $posicao = 1;
                    foreach ($ranking as $equipe => $pontuacao): 
                    ?>
                        <tr>
                            <td><?= $posicao++ ?>º</td>
                            <td><?= htmlspecialchars($equipe) ?></td>
                            <td><?= $pontuacao ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>

        <a href="index.php" class="link-voltar">Jogar Novamente</a>
    </div>
</body>
</html>