const readline = require('readline');

// Cria interface para entrada de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário um número
rl.question('Digite um número inteiro: ', (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Você não digitou um número válido.");
    } else if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }

    rl.close();
});
