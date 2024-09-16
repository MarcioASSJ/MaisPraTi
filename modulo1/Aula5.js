// Execercicio 1: Par ou Impar

// const prompt = require ('prompt-sync') ();
// let num = parseInt (prompt ("Digite um numero: "));

// if (num % 2 == 0) {
//     console.log ("O numero digitado é par.")
// } else {
//     console.log ("O numero digitado é impar.")
// } 


// Exercicio 2: Maior de dois numeros 

// const prompt = require ('prompt-sync')();
// let num1 = parseInt (prompt ("Insira o primeiro numero: "));
// let num2 = parseInt (prompt ("Insira o segundo numero: ")); 

// if (num1 > num2) {
//     console.log ("O primeiro numero é maior.");
// } else if (num1 == num2) {
//     console.log ("Os numeros digitados são iguais.");
// } else {
//     console.log ("O segundo numero é maior.")
// }

// Ecercicio 3: Triangulos

// const prompt = require ('prompt-sync') ();

// let l1 = parseInt (prompt ("Insira o comprimento do primeiro lado: "));
// let l2 = parseInt (prompt ("Insira o comprimento do segundo lado: "));
// let l3 = parseInt (prompt ("Insira o comprimento do terceiro lado: "));

// if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1){
//     console.log ("É possivel formar um triangulo com essas medidas.");
// } else {
//     console.log ("Não é possivel formar um triangulo com essas medidas.");
// }

// Exercicio 4: Calculadora Simples

// const prompt = require ('prompt-sync')();
// let num1 = parseInt (prompt ("Insira o primeiro numero: "));
// let num2 = parseInt (prompt ("Insira o segundo numero: "));
// let operacao = prompt ("Insira a operação desejada (+, -, *, /): ");

// let resultado;

// if (operacao === '+'){
//     resultado = num1 + num2;
// } else if (operacao === '-'){
//     resultado = num1 - num2;
// } else if (operacao === '*'){
//     resultado = num1 * num2;
// } else if (operacao === '/'){
//     if (num2 !== 0){
//         resultado = num1 / num2;
//     } else {
//         console.log ("Erro: não é possivel dividir por zero.");
//         resultado = undefined;
//     }
// } else {
//     console.log ("Operação invalida.");
// }

// if (resultado !== undefined) {
//     console.log ("O resultado é: ", resultado);
// }

// Exercicio 5: Calculadora com Switch Case

// const prompt = require ('prompt-sync') ();

// let num1 = parseInt (prompt ("Insira o primeiro numero: "));
// let num2 = parseInt (prompt ("Insira o segundo numero: "));
// let operacao = prompt ("Escolha a operação desejada (+, -, *, /): ");
// let resultado;

// switch (operacao){
//     case '+':
//         resultado = num1 + num2;
//         break
//     case '-':
//         resultado = num1 - num2;
//         break
//     case '*':
//         resultado = num1 * num2;
//         break
//     case '/':
//         if (num2 !== 0){
//             resultado = num1 / num2;
//         } else {
//             console.log ("Não é possivel realizar divisão por 0.");
//             resultado = undefined
//         }
//     default:
//     console.log ("Operação invalida.")
//     break
// }

// console.log ("O resultado é: ", resultado);

// Estrutura de repetição FOR

// let contador = 0;
// let multiplicando = 2;

// for (contador = 0; contador <= 10; contador++) {
//     console.log (`${multiplicando} * ${contador} = `, multiplicando * contador);
// }

// Exercicio 6: Exibir numeros pares usando FOR

// for (let numpar = 0; numpar <= 50; numpar+=2){
//     console.log (numpar);
// }

// for (let i = 10; i >= 0; i--){
//     console.log (i);
// }

// Exercicio 7: Exibir os multiplos de 5 menores que 100 usando WHILE

// i = 5;
// while (i <= 100){
//     console.log (i);
//     i+=5;
// }

// Exercicio 8: Calcular a soma dos numeros de 1 a 1000 usando WHILE

// let i = 0
// soma = 0
// while (i <= 1000) {
//     soma+=i;
//     i++
// }

// console.log (soma)

// Exercicio 9: Pedir ao usuario para adivinhar um numero entre 1 e 10
// const prompt = require ('prompt-sync')();
// const numcorreto = Math.floor((Math.random() * 10)+1);
// let tentativa

// do {
//     tentativa = parseInt(prompt("Adivinhe um numero entre 1 e 10: "))
//     if (tentativa < numcorreto){
//         console.log ("Tente um numero maior")
//     } else if (tentativa > numcorreto) {
//         console.log ("Tente um numero menor")
//     }
// }  while (tentativa !== numcorreto)

// console.log ("Numero correto!")