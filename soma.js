const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function solicitarNumero() {
    if (contador < 5) {
        rl.question(`Digite o ${contador + 1}º número: `, (input) => {
            const numero = parseFloat(input);
            if (isNaN(numero)) {
                console.log("Valor inválido. Digite um número.");
                rl.close();
                return;
            }
            soma += numero;
            contador++;
            solicitarNumero();
        });
    } else {
        console.log(`A soma total dos 5 números é: ${soma}`);
        rl.close();
    }
}

solicitarNumero();
