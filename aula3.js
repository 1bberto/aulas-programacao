const prompt = require("prompt-sync")();

var N1, N2, N3, mediaAprovacao;

N1 = prompt("Informe a primeira nota: ");
N2 = prompt("Informe a segunda nota: ");
N3 = prompt("Informe a terceira nota: ");
mediaAprovacao = ((4 * N1) + (7 * N2) + (9 * N3))/21;

if(mediaAprovacao >= 9){
    console.log("Conceito A")
}else if(mediaAprovacao >= 7.5 && mediaAprovacao < 9){
    console.log("Conceito B")
}else if(mediaAprovacao >= 6 && mediaAprovacao <7.5){
    console.log("Conceito C")
}else{
    console.log("Conceito D")
}