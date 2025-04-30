const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerValor(pergunta, callback) {
    rl.question(pergunta, (input) => {
        const valor = parseFloat(input);
        if (isNaN(valor)) {
            console.log("Valor inválido. Digite um número.");
            rl.close();
        } else {
            callback(valor);
        }
    });
}

lerValor("Digite o primeiro valor: ", (valor1) => {
    lerValor("Digite o segundo valor: ", (valor2) => {
        if (valor1 === valor2) {
            console.log("Os valores não podem ser iguais.");
        } else if (valor1 < valor2) {
            console.log(`Ordem crescente: ${valor1}, ${valor2}`);
        } else {
            console.log(`Ordem crescente: ${valor2}, ${valor1}`);
        }

        rl.close();
    });
});
