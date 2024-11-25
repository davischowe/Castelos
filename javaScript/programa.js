function prova() {
    const tamanho = 7;

    // Inicializa as matrizes
    let matrizDiagSec = Array.from({ length: tamanho }, () => Array(tamanho).fill(0));
    let matrizDiagPrin = Array.from({ length: tamanho }, () => Array(tamanho).fill(0));

    // Preenche as diagonais
    for (let i = 0; i < tamanho; i++) {
        matrizDiagSec[i][tamanho - i - 1] = 5; // Diagonal secundária
        matrizDiagPrin[i][i] = 7;             // Diagonal principal
    }

    // Soma as duas matrizes
    let matrizSoma = Array.from({ length: tamanho }, () => Array(tamanho).fill(0));
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            matrizSoma[i][j] = matrizDiagSec[i][j] + matrizDiagPrin[i][j];
        }
    }

    // Formata as matrizes para exibição
    let resultado = "Matriz Diagonal Secundária:\n" + matrizDiagSec.map(row => row.join(' ')).join('\n') +
        "\n\nMatriz Diagonal Principal:\n" + matrizDiagPrin.map(row => row.join(' ')).join('\n') +
        "\n\nMatriz Soma:\n" + matrizSoma.map(row => row.join(' ')).join('\n');

    // Exibe o resultado no HTML abaixo do botão
    document.getElementById('resultado1').textContent = resultado;
}

function prova2() {
    const tamanho = 7;
    let matriz = [];
    let somaPares = 0;
    let somaImpares = 0;

    // Gera a matriz 7x7 com números aleatórios de 1 a 20
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            let numero = Math.floor(Math.random() * 20) + 1; // Número aleatório de 1 a 20
            matriz[i][j] = numero;

            // Soma os pares e ímpares
            if (numero % 2 === 0) {
                somaPares += numero;
            } else {
                somaImpares += numero;
            }
        }
    }

    // Formata a matriz para exibição
    let resultado = "Matriz Gerada:\n" + matriz.map(row => row.join(' ')).join('\n') +
        "\n\nSoma dos números pares: " + somaPares +
        "\nSoma dos números ímpares: " + somaImpares;

    // Exibe o resultado no HTML abaixo do botão
    document.getElementById('resultado2').textContent = resultado;
}
function somaColunasImpares() {
    const tamanho = 8;
    let matriz = [];
    let somaColunas = 0;

    // Gera a matriz 8x8 com números aleatórios de 1 a 50
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = Math.floor(Math.random() * 50) + 1; // Número aleatório de 1 a 50
        }
    }

    // Soma os elementos das colunas de índices ímpares
    for (let j = 0; j < tamanho; j++) {
        if (j % 2 !== 0) { // Verifica se o índice da coluna é ímpar
            for (let i = 0; i < tamanho; i++) {
                somaColunas += matriz[i][j];
            }
        }
    }


    let resultado = "Matriz Gerada:\n" + matriz.map(row => row.join(' ')).join('\n') +
        "\n\nSoma dos elementos das colunas de índices ímpares: " + somaColunas;
    document.getElementById('resultado3').textContent = resultado;
}
function reduzirNumero() {
    // Gera um número aleatório entre 1 e 20
    let numero = Math.floor(Math.random() * 20) + 1;
    let passos = []; // Armazena os valores do número em cada iteração

    // Laço WHILE: subtrai 1 enquanto o número for maior que 0
    while (numero > 0) {
        passos.push(numero); // Adiciona o número atual à lista de passos
        numero--; // Subtrai 1
    }
    passos.push(numero); // Adiciona o zero final à lista de passos

    // Formata o resultado para exibição
    let resultado = "Número inicial: " + passos[0] +
        "\n\nPassos até chegar a zero:\n" + passos.join(" , ");

    // Exibe o resultado no HTML
    document.getElementById('resultado4').textContent = resultado;
}
function verificarIdade() {
    // Gera uma idade aleatória entre -10 e 100
    let idade = Math.floor(Math.random() * 111) - 0; // Intervalo de -10 a 100

    let mensagem;
    
     if (idade < 16) {
        mensagem = "Idade: " + idade + ". Não apto a votar.";
    } else if ((idade >= 16 && idade < 18) || idade >= 75) {
        mensagem = "Idade: " + idade + ". Voto é opcional.";
    } else {
        mensagem = "Idade: " + idade + ". Voto é obrigatório.";
    }

    // Exibe o resultado no HTML
    document.getElementById('resultado5').textContent = mensagem;
}
