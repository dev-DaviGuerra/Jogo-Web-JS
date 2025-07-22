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
    // Corrigindo as duas perguntas com respostas erradas:
    {
        'pergunta': 'Quanto é 30% de 90?',
        'opcoes': ['27', '33', '30', '45'], // Opção corrigida
        'correta': '27' // Resposta correta
    },
    {
        'pergunta': 'Se você tem 10 balas e 50% são de morango, quantas balas de morango você tem?',
        'opcoes': ['5', '7', '15', '3'], // Opção corrigida
        'correta': '5' // Resposta correta
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
        'opcoes': ['10,5%', '12,5%', '15,5%', '18,5%'], // Opção corrigida
        'correta': '12,5%'
    }
];