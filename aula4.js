//const prompt = require("prompt-sync")();

// console.log(numeros.length);

// console.log(numeros[0]);

// do {
//   console.log(numeros[0]);
// } while (true);

// var cont = 0;
// while (cont <= 10) {
//   console.log(numeros[0]);
//   cont = cont + 1;
//   break;
//   continue;
// }
var soma = 0;
var numeros = [6, 4, 1, 900, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
// 0
// 0 < 5 -> true -> soma = 0, valor = 6 -> 0 + 6 = 6 -> 1
// 1 < 5 -> true -> soma = 6, valor = 4 -> 6 + 4 = 10 -> 2
// 2 < 5 -> true -> soma = 10, valor = 1 -> 10 + 1 = 11 -> 3
// 3 < 5 -> true -> soma = 11, valor = 900 -> 11 + 900 = 911 -> 4
// 4 < 5 -> true -> soma = 911, valor = 9 -> 911 + 9 = 920 -> 5
// 5 < 5 -> false
// 920
for (var index = 0; index < numeros.length; index = index + 1) {
  soma = soma + numeros[index];
}

console.log(soma);
