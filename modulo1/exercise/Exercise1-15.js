const prompt=require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
console.log('Exercício 1');
let parimpar=Number(prompt('Informe um número:'));
    if(parimpar%2==0){
        console.log(`o número ${parimpar} é Par!`);
    }else{
        console.log(`o número ${parimpar} é Impar!`);
    }

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura decontrole if-else.
 console.log('Exercício 2');

 let idade = Number(prompt('Informe a sua idade: '));
 let faixaetaria;

 if(idade>=0 && idade<=12){
       console.log('Você é uma criança!');
 }else if(idade>=13 && idade<=17){
        console.log('Você é um(a) Adolecente!');

 }else if(idade>=18 && idade<=64){
        console.log('Você é um(a) Adulto(a)!');
 }else if(idade>64){
        console.log('Você é um(a) Idoso(a)!');
 }else{
        console.log('Idade inválida');
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
console.log('Exercício 3');

let nota010=Number(prompt('Informe uma nota de 0 a 10: '));
    if(nota010>=7){
        console.log('Com esta nota está Aprovado!');
    }else if(nota010<7 && nota010>=5){
        console.log('Com esta nota está em Recuperação!');
    }else{
        console.log('Com esta nota está Reprovado!');
    }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
 console.log('Exercício 4');

let nome=prompt('Gostaria de saber mais de você, mas primeiro me diga seu nome: ');
let opção=prompt('Agora escolha uma das opções digitando o número correspondente, você gosta mais de (1)Lasanha, (2)Pizza ou (3)Strogonoff? ');
    switch(opção){
        case '1':
            console.log(`${nome} tem ${idade} anos de idade e gosta de Lasanha!`);
            break;
        case '2':
            console.log(`${nome} tem ${idade} anos de idade e gosta de Pizza!`);
            break;
        case '3':
            console.log(`${nome} tem ${idade} anos de idade e gosta de Strogonoff!`);
            break;
        default:
            console.log('Opção inválida!');
    }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
 console.log('Exercício 5');

let peso=parseFloat(prompt('Informe seu peso: '));
let altura=parseFloat(prompt('Agora informe sua altura: '));
let IMC=parseFloat((peso/(altura*altura)).toFixed(2));

    if(IMC<18.5){
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Magreza.`);
    }else if(IMC>=18.5 && IMC<25){
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Normal.`);
    }else if(IMC>=25 && IMC<30){
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Sobrepeso.`);
    }else if(IMC>=30 && IMC<35){
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Obesidade grau I.`);
    }else if(IMC>=35 && IMC<40){
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Obesidade grau II.`);
    }else{
        console.log(`${nome} seu IMC é ${IMC}, está classificado como Obesidade grau III.`);
    }

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidosformam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
 console.log('Exercício 6');

let ladoA = Number(prompt("Informe a medida do primeiro lado do triângulo: "));
let ladoB = Number(prompt("Informe a medida do segundo lado do triângulo: "));
let ladoC = Number(prompt("Informe a medida do terceiro lado do triângulo: "));

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){
    if (ladoA===ladoB && ladoB===ladoC){
        console.log('As medidas fornecidas formam um Triângulo Equilatero.');
    } else if (ladoA!==ladoB && ladoB!==ladoC && ladoC!==ladoA){
        console.log('As medidas fornecidas formam um Triângulo Escaleno.');
    } else if (ladoA===ladoB || ladoB===ladoC || ladoC===ladoA){
            console.log('As medidas fornecidas formam um Triângulo Isósceles.');
    }
} else {
    console.log("As medidas fornecidas não formam um triângulo.");
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
  console.log('Exercício 7');

let custo;
console.log('É hora de comprar maças, custa R$0,30 cada, levando 12 ou mais custa R$0,25 cada!');
let quantidademaças=Number(prompt('Informe a quantidade de maças que deseja comprar: '));
if(quantidademaças<12){
    custo=quantidademaças*0.30;
    console.log(`Valor a pagar: R$${custo}`);
}else{
    custo=quantidademaças*0.25;
    console.log(`Valor a pagar: R$${custo}`);
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)e escreve-los em ordem crescente.
  console.log('Exercício 8');

let valor1=prompt('Informe um valor: ');
let valor2=prompt('Informe um segundo valor: ');

    if(valor1>valor2){
        console.log(`A ordem crescente dos valores informados é ${valor2} e ${valor1}`);
    }else{
        console.log(`A ordem crescente dos valores informados é ${valor1} e ${valor2}`);

    }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
  console.log('Exercício 9');

for(let i=10; i>=1; i--){
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
  console.log('Exercício 10');

let numero=parseInt(prompt('Informe um número Inteiro: '));
    for(let j=1; j<=10; j++){
        console.log(numero);
    }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
  console.log('Exercício 11');

let soma=0;
let numeros; 

    for(let k=1; k<=5; k++){
        numeros=Number(prompt(`informe um ${k}º número: `));
        soma = soma+numeros;
    }
    console.log(`A soma dos números digitados é igual a ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
  console.log('Exercício 12');

let tabuada = Number(prompt("Informe um numero para sua tabuada: "));

    for (let i = 1; i <= 10; i ++){
      console.log (`${tabuada} * ${i} = `, tabuada * i);
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazera média aritmética desses números.
console.log('Exercício 13');

let numDec=1;
let contador = 0;
let somaDec = 0;

while (numDec !== 0){
    numDec = parseFloat(prompt('Informe um numero decimal ou 0 para sair: '));
    somaDec += numDec;
    contador++;
}
console.log("A media aritmetica dos numeros digitados é: ", (somaDec/contador).toFixed(2));

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
    console.log('Exercício 14');

let numFat = parseInt(prompt("Escreva um numero para descobrir seu fatorial: "))
let result = numFat

for (let fatorial = numFat-1; fatorial > 0; fatorial--){
    result *= fatorial
}

console.log (result)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
  console.log('Exercício 15')

let termo1=1, termo2=1, termo3, F;
for(F=1; F<=10; F++ ){
    console.log(termo1);
    termo3=termo1+termo2;
    termo1=termo2;
    termo2=termo3;
}