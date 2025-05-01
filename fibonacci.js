let anterior = 0;
let atual = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");
console.log(anterior);
console.log(atual);

for (let i = 3; i <= 10; i++) {
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}
