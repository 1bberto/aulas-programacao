const prompt = require("prompt-sync")();

var idade;

idade = prompt("Qual a sua idade? ");

if (idade <= 13) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
