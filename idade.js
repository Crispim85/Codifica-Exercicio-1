const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite sua idade: ', (input) => {
    const idade = parseInt(input);

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida. Por favor, insira um número inteiro positivo.");
    } else if (idade < 12) {
        console.log("Categoria: Criança");
    } else if (idade < 18) {
        console.log("Categoria: Adolescente");
    } else if (idade < 60) {
        console.log("Categoria: Adulto");
    } else {
        console.log("Categoria: Idoso");
    }

    rl.close();
});