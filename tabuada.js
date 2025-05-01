const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver sua tabuada: ", (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número.");
    } else {
        console.log(`\nTabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
});
