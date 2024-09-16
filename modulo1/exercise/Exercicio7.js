const prompt = require ('prompt-sync')();

let quant = parseInt (prompt ("Escreva a quantidade de maçãs que deseja comprar: "));
let valortotal

if (quant >= 12){
    valortotal = quant * 0.25
    console.log (`Na compra de ${quant} maças, o valor gasto é R$ ${valortotal.toFixed(2)}.`);
} else {
    valortotal = quant * 0.30
    console.log (`Na compra de ${quant} maçãs, o valor gasto é R$ ${valortotal.toFixed(2)}.`);
}