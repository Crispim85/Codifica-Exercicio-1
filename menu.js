const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== MENU INTERATIVO ===");
console.log("1 - Dizer Olá");
console.log("2 - Mostrar a data atual");
console.log("3 - Sair");

rl.question("Escolha uma opção (1, 2 ou 3): ", function(opcao) {
  switch (opcao) {
    case "1":
      console.log("Olá! Tudo bem com você?");
      break;

    case "2":
      const dataAtual = new Date();
      console.log("Data atual: " + dataAtual.toLocaleString("pt-BR"));
      break;

    case "3":
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida! Tente novamente.");
  }

  rl.close();
});