const prompt = require ('prompt-sync')();

let nome = prompt ("Digite o nome do aluno: ");
let nota1 = parseInt (prompt ("Digite a nota da primeira avaliação: "));
let nota2 = parseInt (prompt ("Digite a nota da segunda avaliação: "));

let media = (nota1 + nota2) / 2
console.log ("Sua média é: ", media);

if (media >= 6) {
    console.log ("PARABENS, VOCÊ FOI APROVADO!");
} else {
    console.log ("VOCÊ FOI REPROVADO! ESTUDE MAIS.");
}