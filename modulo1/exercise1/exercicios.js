const prompt = require ('prompt-sync')();
// Exercício 1:
let temperatura = parseInt (prompt("Digite a temperatura em celsius que deseja converter: "));
let conversao = temperatura * 1.8 + 32;

console.log("A temperatura em fahrenheit é: ", conversao);
//------------

// Exercício 2:
let eleitores = parseInt (prompt ("Digite o numeros de eleitores da cidade: "));
let votosvalidos = parseInt (prompt ("Digite a quantidade de votos validos: "));
let votosbrancos = parseInt (prompt ("Digite a quantidade de votos em branco: "));
let votosnulos = parseInt (prompt ("Digite a quantidade de votos nulos: "));

if (votosvalidos + votosbrancos + votosnulos <= eleitores){
    votosvalidos = (votosvalidos * 100) / eleitores
    votosbrancos = (votosbrancos * 100) /  eleitores
    votosnulos = (votosnulos * 100) / eleitores

    console.log (`Os votos validos representam ${votosvalidos}% dos votos.`);
    console.log (`Os votos brancos representam ${votosbrancos}% dos votos.`);
    console.log (`Os votos nulos representam ${votosnulos}% dos votos.`);
} else {
    console.log ("A quantidade de votos computada excede o numero de eleitores, verifique os votos e tente novamente.")
}
//------------
// Exercício 3:
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
//------------
// Exercício 4 e 5:
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
//------------

// Exercício 6:
let lado1 = parseInt (prompt ("Digite o cumprimento do primeiro lado: "));
let lado2 = parseInt (prompt ("Digite o cumprimento do segundo lado: "));
let lado3 = parseInt (prompt ("Digite o cumprimento do terceiro lado: "));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log ("É possivel formar um triangulo com as medidas informadas.");
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        console.log ("As medidas informadas formam um triângulo equilátero.")
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        console.log ("As medidas informadas formam um triângulo escaleno.")
    } else {
        console.log ("As medidas informadas formam um triângulo isósceles.")
    }
} else {
    console.log ("As medidas informadas não formam um triângulo.")
}
//------------
// Exercício 7:
let quant = parseInt (prompt ("Escreva a quantidade de maçãs que deseja comprar: "));
let valortotal

if (quant >= 12){
    valortotal = quant * 0.25
    console.log (`Na compra de ${quant} maças, o valor gasto é R$ ${valortotal.toFixed(2)}.`);
} else {
    valortotal = quant * 0.30
    console.log (`Na compra de ${quant} maçãs, o valor gasto é R$ ${valortotal.toFixed(2)}.`);
}
//------------
// Exercício 8:
let valor1 = parseInt (prompt ("Digite o primeiro valor: "));
let valor2 = parseInt (prompt ("Digite o segundo valor (não deve repetir o anterior): "));

if (valor1 === valor2){
    console.log ("Os numeros digitados devem ser diferentes.");
} else if(valor1 < valor2){
    console.log (`Os valores em ordem crescente são: ${valor1}, ${valor2}. `);
} else {
    console.log (`Os valores em ordem crescente são: ${valor2}, ${valor1}. `);
}

//------------
// Exercício 9:
let codigo = parseInt (prompt ("Digite o codigo de origem de seu produto: "));
let regiao

switch (true) {
    case (codigo === 1):
        regiao = "Sul";
        break
    case (codigo === 2):
        regiao = "Norte";
        break
    case (codigo === 3):
        regiao = "Leste";
        break
    case (codigo === 4):
        regiao = "Oeste";
        break
    case (codigo === 5 || codigo === 6):
        regiao = "Nordeste";
        break
    case (codigo === 7 || codigo === 8 || codigo === 9):
        regiao = "Sudeste";
        break
    case (codigo >= 10 && codigo <= 20):
        regiao = "Centro-Oeste";
        break
    case (codigo >= 25 && codigo <= 50):
        regiao = "Nordeste";
        break
    default:
        console.log ("Produto importado.")
}

console.log (`O produto é da região ${regiao}.`);
//------------
// Exercício 10:
let num = parseInt (prompt ("Digite um numero inteiro: "));

for (i = 0; i < 10; i++){
    console.log (num);
}
//------------
// Exercício 11:
do {
    num = parseInt (prompt ("Digite um valor inteiro: "));
    if (num % 2 === 0) {
        console.log ("O numero digitado é par.");
    } else {
        console.log ("O numero digitado é impar.");
    }
} while (num > 0) 
  
console.log ("Programa finalizado.")
//------------
// Exercício 12:
for (let i = 1000; i <= 1999; i++){
    if (i % 11 === 5){
        console.log (i);
    }
}
//------------
// Exercício 13:
let N;

for (let i = 0; i < 5; i++){
    N = parseInt (prompt ("Digite o valor para N: "));
    for (let contador = 1; contador <= N; contador++){
        console.log (`${contador} * ${N} =`, contador * N);
    }
}
//------------
// Exercício 14:
let soma = 0, contador = -1, numdig = 1;

while (numdig !== 0) {
    numdig = parseFloat (prompt("Digite um numero decimal, ou 0 para sair: "));
    soma = soma + numdig;

    contador++
}

let mediaD = parseFloat (soma / contador);
console.log (`A média aritmedica dos numeros digitados é ${mediaD.toFixed(2)}`);
//------------
// Exercício 15:
somamult = 0, somapeso = 0;
let n = parseFloat (prompt ("Digite um numero decimal (ou 0 para sair): "));

while (n !== 0) {
    let p = parseFloat (prompt ("Digite o peso do numero decimal (ou 0 para sair):  "));

    somamult = somamult + (n * p);
    somapeso = somapeso + p;
    
    n = parseFloat (prompt ("Digite um numero decimal (ou 0 para sair): "));
  
}

let mediaP = somamult / somapeso;
console.log (`A media ponderada dos numeros inseridos é ${mediaP.toFixed(2)}`);
//------------
// Exercício 16:
let primos = Array ();
let contadorprimos = 0;
let numero = 101;

while (contadorprimos < 50) {
    let divisores = 0;
    let divisor = 1;

    while (divisor <= numero){
        if (numero % divisor === 0){
            divisores++
        }

        divisor++
    }

    if (divisores === 2){
        primos.push (numero);
        contadorprimos++;
    }

    numero++
}

console.log ("Os 50 numeros primos a partir de 100 são: ");
console.log (primos.join (", "));
//------------