const todasAsPerguntas = [
    {
        'pergunta': 'Quanto é 10% de 70?',
        'opcoes': ['700', '0,7', '14', '7'],
        'correta': '7'
    },
    {
        'pergunta': 'Quanto é 5% de 100?',
        'opcoes': ['10', '50', '500', '5'],
        'correta': '5'
    },
    {
        'pergunta': 'Quanto é 20% de 50?',
        'opcoes': ['10', '20', '2', '15'],
        'correta': '10'
    },
    {
        'pergunta': 'Se Lucas tem 60 balas e dá 50% para o irmão, quantas balas ele deu?',
        'opcoes': ['30 balas', '15 balas', '20 balas', '50 balas'],
        'correta': '30 balas'
    },
    {
        'pergunta': 'Ana leu 30 páginas de um livro que tem 60 páginas. Qual porcentagem do livro ela leu?',
        'opcoes': ['50%', '150%', '10%', '25%'],
        'correta': '50%'
    },
    {
        'pergunta': 'Em uma sala com 100 alunos, 75% são meninos. Quantas meninas há na sala?',
        'opcoes': ['75', '35', '25', '15'],
        'correta': '25'
    },
    {
        'pergunta': 'Se um brinquedo custa 40 reais e tem 10% de desconto, quanto é o valor do desconto?',
        'opcoes': ['4 reais', '10 reais', '8 reais', '14 reais'],
        'correta': '4 reais'
    },
    {
        'pergunta': 'Pedro comeu 25% de uma pizza com 8 pedaços. Quantos pedaços ele comeu?',
        'opcoes': ['2', '4', '3', '6'],
        'correta': '2'
    },
    {
        'pergunta': 'Em um grupo de 20 pessoas, 50% usam óculos. Quantas pessoas usam óculos?',
        'opcoes': ['10', '5', '15', '12'],
        'correta': '10'
    },
    {
        'pergunta': 'Quanto é 30% de 90?',
        'opcoes': ['27', '33', '30', '45'],
        'correta': '27' 
    },
    {
        'pergunta': 'Se você tem 10 balas e 50% são de morango, quantas balas de morango você tem?',
        'opcoes': ['5', '7', '15', '3'], 
        'correta': '5' 
    },
    {
        'pergunta': 'Maria tem 10 maçãs e 10% delas estão maduras. Quantas maçãs maduras ela tem?',
        'opcoes': ['1', '2', '4', '0,1'],
        'correta': '1'
    },
    {
        'pergunta': 'João tem 4 figurinhas e 25% são do time dele. Quantas figurinhas são do outro time?',
        'opcoes': ['1', '2', '3', '4'],
        'correta': '3'
    },
    {
        'pergunta': 'Se uma pizza tem 4 pedaços e você comeu 50%, quantos pedaços você comeu?',
        'opcoes': ['1', '2', '3', '0.2'],
        'correta': '2'
    },
    {
        'pergunta': 'Em uma caixa com 5 lápis, 20% são vermelhos. Quantos lápis vermelhos tem na caixa?',
        'opcoes': ['1', '2', '1,5', '4'],
        'correta': '1'
    },
    {
        'pergunta': 'Ana tinha 10 reais e gastou 10% em um lanche. Quanto ela gastou?',
        'opcoes': ['1', '9', '5', '4'],
        'correta': '1'
    },
    {
        'pergunta': 'Se uma garrafa está cheia até a metade, qual porcentagem da garrafa está cheia?',
        'opcoes': ['25%', '30%', '40%', '50%'],
        'correta': '50%'
    },
    {
        'pergunta': 'Em uma sala com 5 alunos, se 2 têm óculos, que porcentagem dos alunos têm óculos?',
        'opcoes': ['40%', '70%', '15%', '20%'],
        'correta': '40%'
    },
    {
        'pergunta': 'Se um livro tem 10 páginas e você leu 1 página, qual porcentagem do livro você leu?',
        'opcoes': ['5%', '7%', '15%', '10%'],
        'correta': '10%'
    },
    {
        'pergunta': 'Quanto é 10% de 200?',
        'opcoes': ['2', '10', '20', '100'],
        'correta': '20'
    },
    {
        'pergunta': 'Quanto é 25% de 80?',
        'opcoes': ['10', '15', '20', '25'],
        'correta': '20'
    },
    {
        'pergunta': 'Se um produto custa R$ 150, com 20% de desconto, qual é o novo preço?',
        'opcoes': ['R$60', 'R$120', 'R$20', 'R$130'],
        'correta': 'R$120'
    },
    {
        'pergunta': 'João acertou 18 questões de uma prova com 20 questões. Qual foi a porcentagem de acertos?',
        'opcoes': ['80%', '20%', '95%', '90%'],
        'correta': '90%'
    },
    {
        'pergunta': 'Uma blusa de R$ 100 sofreu um aumento de 15%. Qual o novo valor?',
        'opcoes': ['R$85', 'R$105', 'R$115', 'R$130'],
        'correta': 'R$115'
    },
    {
        'pergunta': 'Quanto é 5% de 1.000?',
        'opcoes': ['0,5', '5', '50', '500'],
        'correta': '50'
    },
    {
        'pergunta': 'Se 60 é 30% de um número, qual é esse número?',
        'opcoes': ['220', '180', '120', '200'],
        'correta': '200'
    },
    {
        'pergunta': 'Um time venceu 12 jogos de um total de 30. Qual a porcentagem de vitórias?',
        'opcoes': ['40%', '30%', '50%', '60%'],
        'correta': '40%'
    },
    {
        'pergunta': 'Uma cidade aumentou sua população em 10%, passando a ter 110.000 habitantes. Quantos tinha antes?',
        'opcoes': ['100.000', '120.000', '90.000', '80.000'],
        'correta': '100.000'
    },
    {
        'pergunta': 'Um produto foi vendido com 40% de desconto e custou R$ 90. Qual era o preço original?',
        'opcoes': ['R$ 150', 'R$ 160', 'R$ 170', 'R$ 180'],
        'correta': 'R$ 150'
    },
    {
        'pergunta': 'Se uma caixa de bombons tem 8 bombons e você comeu 1 bombom, que porcentagem da caixa você comeu?',
        'opcoes': ['10,5%', '12,5%', '15,5%', '18,5%'],
        'correta': '12,5%'
    },
    {
        'pergunta': 'Você tem um saquinho com 5 bolinhas vermelhas e 3 bolinhas azuis. Qual a probabilidade de, sem olhar, você tirar uma bolinha vermelha?',
        'opcoes': ['3 em 8', '5 em 8', '5 em 3', '8 em 5'],
        'correta': '5 em 8'
    },
    {
        'pergunta': 'Em uma caixa de lápis de cor, há 10 lápis. Se 2 deles são verdes, qual a chance de pegar um lápis que NÃO seja verde?',
        'opcoes': ['20%', '10 em 8', '80%', '2 em 10'],
        'correta': '80%'
    },
    {
        'pergunta': 'Um dado de 6 lados é jogado. Qual é a probabilidade de o número que cair ser um número par?',
        'opcoes': ['1 em 6', '3 em 6', '2 em 6', '6 em 3'],
        'correta': '3 em 6'
    },
    {
        'pergunta': 'Em uma roleta de festa de 8 partes iguais, 3 partes são azuis, 2 são verdes e 3 são vermelhas. Qual cor tem a maior chance de cair?',
        'opcoes': ['Verde', 'Vermelha', 'Azul', 'Azul e vermelha têm a mesma chance e é a maior chance.'],
        'correta': 'Azul e vermelha têm a mesma chance e é a maior chance.'
    },
    {
        'pergunta': 'Você tem 10 cartões de um jogo, numerados de 1 a 10. Qual a probabilidade de, ao virar um cartão, o número ser menor que 4?',
        'opcoes': ['3 em 10', '4 em 10', '6 em 10', '1 em 10'],
        'correta': '3 em 10'
    },
    {
        'pergunta': 'Em uma sacola de frutas, há 4 maçãs e 6 bananas. Qual a probabilidade de você pegar uma maçã?',
        'opcoes': ['4 em 10', '6 em 10', '4 em 6', '10 em 4'],
        'correta': '4 em 10'
    },
    {
        'pergunta': 'Se o tempo está ensolarado e a previsão é de 70% de chance de chover. Qual a probabilidade de NÃO chover?',
        'opcoes': ['70%', '30%', '100%', '0%'],
        'correta': '30%'
    },
    {
        'pergunta': 'Em uma caixa com 20 figurinhas, 15 são de super-heróis e o restante é de animais. Qual a probabilidade de tirar uma figurinha de animal?',
        'opcoes': ['15 em 20', '5 em 20', '5 em 15', '20 em 5'],
        'correta': '5 em 20'
    },
    {
        'pergunta': 'Você tem um baralho com 4 cartas: um A, um 2, um 3 e um 4. Qual a probabilidade de tirar um número maior que 2?',
        'opcoes': ['2 em 4', '1 em 4', '3 em 4', '4 em 4'],
        'correta': '2 em 4'
    }
];