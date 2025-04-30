const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantas maçãs você deseja comprar? ', (input) => {
    const quantidade = parseInt(input);

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Quantidade inválida. Digite um número inteiro positivo.");
    } else {
        const precoUnitario = quantidade < 12 ? 0.30 : 0.25;
        const total = quantidade * precoUnitario;

        console.log(`Preço por unidade: R$ ${precoUnitario.toFixed(2)}`);
        console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
    }

    rl.close();
});
