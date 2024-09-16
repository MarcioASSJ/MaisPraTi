// Arrays e Funções

// Exercicio 1: Somar todos os elementos de um array;

// let elementos = [1, 2, 3, 4];

// function somaelementos (vetor) {
//     let soma = 0;

//     for (let i = 0; i < vetor.length; i++){ // i é o contador, o indice, para pular para a casinha do lado.
//         soma += vetor [i]; // i é o indice (vetor)

//     }

//     return soma
// }

// console.log ("A soma dos elementos é: ", somaelementos (elementos)) // fora do parenteses é o nome da função, dentro do parenteses o grupinho do array.

// Exercicio 2: Encontrar o maior numero em um Array

// let num = [1, 2, 3, 4];

// function maiornum (vetor){
//     let maior = vetor [0];
//     for (let i = 1; i < vetor.length; i++){ // estrutura para percorrer o array
//         if (vetor [i] > maior){
//             maior = vetor [i];
//         }
//         }
//         return maior
//     }
// console.log ("Dentro os elementos o maior é: ", maiornum (num));

// Exercicio 3: Reverter um Array

// let num = [1,2,3,4,5];

// function revert (vetor){
//     let vetorresultado = [];
//     for (let i = vetor.length - 1; i >= 0; i--){ 
//         vetorresultado.push (vetor[i])
//     }
//     return vetorresultado
// }
// console.log ("O vetor invertido é: ", revert (num));

// Exercicio 4: Somar todos os elementos de uma matriz

// function somaMatriz (matriz){
//     let soma = 0
//     for (let i = 0; i < matriz.length; i++){
//         for (let j = 0; j < matriz[i].length; j++){
//             soma += matriz [i][j]
//         }
//     }
// return soma
// }

// console.log ("A soma dos elementos contidos na nossa matriz é: ", somaMatriz ([[1,2],[3,4]]))

// Exercicio 5: Encontrar o maior numero em uma matriz

// function maiorNum (matriz){
//     let maior = matriz [0][0];
//     for (let i = 0; i < matriz.length; i++){
//         for (let j = 0; j < matriz[i].length; j++){
//             if (matriz [i][j] > maior){
//                 maior = matriz [i][j] // i linha == j coluna
//             }
//         }
//     }
//     return maior
// }
// console.log ("O maior numero da minha matriz é: ", maiorNum ([[1,2],[3,4]]))

// Funções avançadas: Strings

/* 
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em
    objetos, possuindo propriedades e metodos.
*/

// console.log ("Thais Belmonte".length) // conta o numero de caracteres
// console.log ("Thais".charAt(2)) // mostra a letra que tem no espaço solicitado

// let nome = 'Thais'
// console.log (nome.indexOf ('h')); // metodo que retorna a posição do caractere na sua primeira ocorrencia
// // - 1 é quando a busca não encontra o que foi pedido

// let nome = 'Junior'
// console.log (nome);
// let nomealterado = nome.replace ('Junior', 'Amor'); // é um metodo que permite substituir textos dentro de uma string
// console.log (nomealterado)

// let nome = 'Thais';
// console.log (nome.substr ('2', '4')); // metodo utilizado para extrair um trecho de um string

// let nome = 'Tata'
// console.log (nome.toLocaleUpperCase()) // trona todas as letras maiusculas

// let nome = 'TATA'
// console.log (nome.toLocaleLowerCase()) // trona todas as letras minusculas

// let nome = 'Tata'
// console.log (nome.toLocaleUpperCase()) // trona todas as letras maiusculas

// let nome = ' RHYS  '
// console.log ('-' + nome.trim () + '-'); // remove todos os espaços em branco das extremidades de uma string

// FUNÇÕES AVANÇADAS: MATEMATICA

// let x = Math.ceil (10.5) // arredonda valores para cima
// console.log (x)

// let y = Math.floor (10.5) // arredonda para baixo
// console.log (y)

// let z = Math.round (10.7) // arredonda para cima se for abaixo de 0.6 e para baixo se for 0.5
// console.log (z)

// let a = Math.random () // gera um numero aleatorio
// console.log (a)

// FUNÇÕES AVANÇADAS: DATAS

let data = new Date ()

// console.log (data.getDate()); // para mostrar o dia atual
// console.log (data.getMonth() +1 ); // para mostrar o mes atual
// console.log (data.getFullYear ()) ; // para mostra o ano inteiro

// console.log (`${data.getDate()}/0${data.getMonth() +1}/${data.getFullYear()}`);

// console.log (data.toString());  // data atual
// data.setDate (data.getDate() + 720); // data atual em dias, somando mais dias, o mesmo pode ser fieto com mes e ano
// console.log (data.toString())

console.log (data.getTime()) // retorna os numeros em milesegundos de 1970 até hoje

