const prompt = require ('prompt-sync')();

let valor1 = parseInt (prompt ("Digite o primeiro valor: "));
let valor2 = parseInt (prompt ("Digite o segundo valor (não deve repetir o anterior): "));

if (valor1 === valor2){
    console.log ("Os numeros digitados devem ser diferentes.");
} else if(valor1 < valor2){
    console.log (`Os valores em ordem crescente são: ${valor1}, ${valor2}. `);
} else {
    console.log (`Os valores em ordem crescente são: ${valor2}, ${valor1}. `);
}

