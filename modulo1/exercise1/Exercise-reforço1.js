const prompt = require ('prompt-sync')();

// 1 - Imprima a sequência de Fibonacci até o 10º termo

// let termo1=0, termo2=1, termo3,F;
// for(F=1; F<=10; F++ ){
//     console.log(`${termo1}`);
//     termo3=termo1+termo2;
//     termo1=termo2;
//     termo2=termo3;
// }
//---------------- 
// 2 - Verifique se um número é primo
// let numero, i;
//     numero=(prompt('Informe um número ou 0 para sair: '));
//         if(numero>0){0
//             for(i=2; i<=Math.sqrt(numero); i++){
//                 if(numero%i == 0){
//                    console.log('Não é primo');
//                }else{
//                    console.log('É primo');
//                 }
//              }
//         }
//----------------  conferir 50 primeiros primos

// let count=0
// let num=100
// do {
//     let primo=0
//     for(let i=1; i <= num; i++){
//         if(num%i==0){
//             primo++
//         }
//     }

//     if(primo === 2) {
//         console.log(num)
//         count++
//     }

//     num++
//     } while(count < 50)
//---------------- 
let carros= Array()
carros[0] = 'Civic'
carros[1] = 10
carros [2] = true
carros ['Hyago'] = '10'

let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']
livros.push('Sherlock Holmes')
livros.unshift('1984')
livros.pop()
livros.shift()
console.log(livros)
livros.splice(2, 0, 'Animais Fantásticos') // splice index-0não remove e 1 substituisa-termo que quero adicionar, colocando apenas o 2 no comando ele vai apagar todos os indices a partir do 2

//---------------- 

//---------------- 

//---------------- 

//---------------- 

//---------------- 

//----------------