const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu peso em kg: ', (pesoInput) => {
    const peso = parseFloat(pesoInput);

    rl.question('Digite sua altura em metros: ', (alturaInput) => {
        const altura = parseFloat(alturaInput);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            console.log("Valores inválidos. Digite números positivos para peso e altura.");
        } else {
            const imc = peso / (altura * altura);
            console.log(`Seu IMC está na categoria: ${imc.toFixed(2)}`);

            if (imc < 18.5) {
                console.log("Baixo peso");
            } else if (imc < 24.9) {
                console.log("Peso normal");
            } else if (imc < 29.9) {
                console.log("Sobrepeso");
            } else {
                console.log("Obesidade");
            }
        }

        rl.close();
    });
});
