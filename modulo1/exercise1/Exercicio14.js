const prompt = require ('prompt-sync') ();

let soma = 0, contador = -1, numdig = 1;

while (numdig !== 0) {
    numdig = parseFloat (prompt("Digite um numero decimal, ou 0 para sair: "));
    soma = soma + numdig;

    contador++
}

let media = parseFloat (soma / contador);
console.log (`A média aritmedica dos numeros digitados é ${media.toFixed(2)}`);