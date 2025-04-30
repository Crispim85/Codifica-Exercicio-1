const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerLado(pergunta, callback) {
    rl.question(pergunta, (input) => {
        const valor = parseFloat(input);
        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido. Digite um número positivo.");
            rl.close();
        } else {
            callback(valor);
        }
    });
}

lerLado("Digite o valor do lado A: ", (a) => {
    lerLado("Digite o valor do lado B: ", (b) => {
        lerLado("Digite o valor do lado C: ", (c) => {
            if (a + b > c && a + c > b && b + c > a) {
                console.log("Os lados formam um triângulo.");

                if (a === b && b === c) {
                    console.log("Tipo: Triângulo Equilátero");
                } else if (a === b || a === c || b === c) {
                    console.log("Tipo: Triângulo Isósceles");
                } else {
                    console.log("Tipo: Triângulo Escaleno");
                }
            } else {
                console.log("Os lados informados **não formam** um triângulo.");
            }

            rl.close();
        });
    });
});
