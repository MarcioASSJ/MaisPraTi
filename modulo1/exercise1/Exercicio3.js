const prompt = require ('prompt-sync')();

let num1 = parseInt (prompt ("Digite o primeiro numero: "));
let num2 = parseInt (prompt ("Digite o segundo numero: "));
let num3 = parseInt (prompt ("Digite o terceiro numero: "));
let num4 = parseInt (prompt ("Digite o quarto numero: "));

novonum1 = num1 + 25;
novonum2 = num2 * 3;
let novonum3 = parseFloat (num3 * 12 / 100);
novonum4 = num1 + num2 + num3 

console.log ("O novo valor do primeiro numero é: ", novonum1);
console.log ("O novo valor do segundo numero é: ", novonum2);
console.log ("O novo valor do terceiro numero é: ", novonum3);
console.log ("O novo valor do quarto numero é: ", novonum4);