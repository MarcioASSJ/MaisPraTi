const prompt = require ('prompt-sync')();

// 1 - Imprima a sequência de Fibonacci até o 10º termo

let termo1=0, termo2=1, termo3,F;
for(F=1; F<=10; F++ ){
    console.log(`${termo1}`);
    termo3=termo1+termo2;
    termo1=termo2;
    termo2=termo3;
}

//---------------- 

// 2 - Verifique se um número é primo
let numero, i;
    numero=(prompt('Informe um número ou 0 para sair: '));
        if(numero>0){0
            for(i=2; i<=Math.sqrt(numero); i++){
                if(numero%i == 0){
                   console.log('Não é primo');
               }else{
                   console.log('É primo');
                }
             }
        }
//----------------  

// 3 - Imprima um triângulo de números

let numlinhas = 5

for (let i = 1; i <= numlinhas; i++ ){
  let linha = ' '

  for (let j = 1; j <= i; j++){
    linha += j + ' '
  }

  console.log (linha)
}

//---------------- 

// 4 - Calcule o fatorial de um número

let num = Number(prompt("Informe o numero para calcular o fatorial: "))

if (num < 0){
  console.log("Não pode ser calculado o fatorial de um número negativo.")
} else {
  let fatorial = 1
  let i = 1

  while (i <= num){
    fatorial *= i++
  }

  console.log(`O fatorial de ${num} é ${fatorial}`)
}

//---------------- 
//5 - Inverta os dígitos de um número

let digitos = Number(prompt("Informe um numero para ser invertido: "))

if (digitos < 0){
  console.log("Informe um numero positivo")
} else {
  let digOriginal = digitos
  let digReverso = 0

  while (digOriginal > 0){
    let digit = digOriginal % 10
    digReverso = digReverso * 10 + digit
    digOriginal = Math.floor(digOriginal / 10)
  }

  console.log (`O numero ${digitos} invertido é ${digReverso}`)
}

//---------------- 
//6 - Verifique se um número é palíndromo

let numPalin = Number(prompt("Informe um numero para verificar se é palindromo: "))

if (numPalin < 0){
  console.log ("Digite um numero positivo.")
} else {
  let digOriginal = numPalin
  let digReverso = 0
  let temp = digOriginal

  while (temp > 0){
    let digit = temp % 10
    digReverso = digReverso * 10 + digit
    temp = Math.floor(temp / 10)
  }

  if (digOriginal === digReverso){
    console.log (`${numPalin} é um palindromo.`)
  } else {
    console.log (`${numPalin} não é m palindromo.`)
  }
}


//---------------- 
//7 - Conte o número de dígitos de um número


let quantDig = Number(prompt("Informe um número para contar os dígitos: "))

if (quantDig < 0) {
    console.log("Informe um número positivo.")
} else {
    let count = 0
    let temp = quantDig

    do {
        count++
        temp = Math.floor(temp / 10)
    } while (temp > 0)

    console.log(`O número ${quantDig} tem ${count} dígitos.`)
}

//---------------- 
// 8 - Calcule a soma dos dígitos de um número

let somDig = Number(prompt("Informe um número para calcular a soma dos dígitos: "))

if (somDig < 0) {
    console.log("Por favor, informe um número positivo.")
} else {
    let soma = 0
    let temp = somDig

    do {
        let digit = temp % 10
        soma += digit
        temp = Math.floor(temp / 10)
    } while (temp > 0)

    console.log(`A soma dos dígitos de ${somDig} é ${soma}.`)
}

//---------------- 
// 9 - Imprima um padrão de estrela decrescente

let numEst = Number(prompt("Informe o número inicial de estrelas: "))

if (numEst <= 0) {
    console.log("Informe um número positivo maior que zero.")
} else {
    let i = numEst

    do {
        let j = 0;
        
        while (j < i) {
            process.stdout.write('*')
            j++
        }
        
        console.log()
        i--

    } while (i > 0)
}

//----------------
//10 - Encontre o maior divisor comum (MDC) de dois números

let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número: "))

if (num1 <= 0 || num2 <= 0) {
    console.log("Informe números inteiros positivos.")
} else {
    let a = num1
    let b = num2

    do {
        let temp = a
        a = b
        b = temp % b
    } while (b !== 0)

    console.log(`O maior divisor comum (MDC) de ${num1} e ${num2} é ${a}.`);
}