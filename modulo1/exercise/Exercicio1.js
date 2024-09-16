const prompt = require ('prompt-sync')();

let temperatura = parseInt (prompt("Digite a temperatura em celsius que deseja converter: "));
let conversao = temperatura * 1.8 + 32;

console.log("A temperatura em fahrenheit é: ", conversao);