const prompt = require("prompt-sync")();

var idade;

idade = prompt("Qual a sua idade? ");

if (idade >= 18) {
  console.log("Maior de Idade!");
} else {
  console.log("Menor de Idade!");
}
