// Array ou Vetor

// let listacompras = Array ();

// listacompras[0] = "Bolacha"
// listacompras[1] = "Caderno"
// listacompras['x'] = 100

// console.log (listacompras)

// let listafrutas = ['Bala', 'Chocolate']

// console.log (listafrutas)

// let listaviagem = Array ('Passagens', 'Malas')

// console.log (listaviagem)

// Arreys Multidimensionais ou Matriz

// let listacoisas = Array ()
// listacoisas['frutas'] = Array ()
// listacoisas['frutas'][0] = "Morango"
// listacoisas['frutas'][1] = "Uva"
// listacoisas['frutas'][2] = "Morango"

// listacoisas['viagem'] = Array ()
// listacoisas['viagem'][0] = "Passagens"
// listacoisas['viagem'][1]= "Malas"

// console.log (listacoisas)

// // Inserção de elementos no final do Array

// listacoisas['frutas'].push ('Banana')
// console.log (listacoisas)

// // Inserção de elementos no começo do Array

// listacoisas['frutas'].unshift('Limão')
// console.log(listacoisas)

// // Exclusão de elementos no final do Array

// listacoisas['frutas'].pop ()

// // Exclusão de elementos no começo do Array

// listacoisas['frutas'].shift ()

// console.log (listacoisas)

// Pesquisar no meu Array

// let listaprodutos = Array ('computador', 'caneta', 'chuteira')

// let aux = listaprodutos.indexOf ('computador')
// // O index off, quando não encontra o elemento, retorna -1

// if (aux === -1){
//     console.log ('Elemento não existe no Array')
// } else {
//     console.log ('Elemente existe e esta na posição ' + aux)
// }

// Organizar Array

// let listaprodutos = Array ('Lousa', 'Caneta', 'Garrafa de água')

// console.log (listaprodutos.sort())

// let listaprodutos = Array (5, 8, 6, 4, 1)

// console.log (listaprodutos.sort())

// Função

// function calcularareaterreno (largura, comprimento){
//     let area = largura * comprimento
//     return area // escopo de função
// }

// area não é acessivel aqui

// let prompt = require ('prompt-sync')();
// let lg = prompt ("Digite a largura do terreno em metros: ");
// let cp = prompt ("Digite o comprimento do terreno em metros: ");

// // Chamada da função e passagem de parametros

// let resultado = calcularareaterreno (lg, cp)
// console.log ("O terreno possui " + resultado + " metros quadrados.")

// Escopo Global - A variavel pode ser acessada em qualquer parte do meu script.
// Escopo de Função - A variavel só pode ser acessada dentro da função.
// Escopo de Bloco - São acessiveis somente em blocos.
// Var é uma variavel global 
// Escopo - Onde uma variavel pode ser acessada.

// global - permite que a variavel seja acessada em qualquer parte do codigo
// let variavelglobal;
// let x = 5;
// let y = -2;

// // função - apenas demtro da função
// function variavelF (var1, var2){
//     let variavelfuncao = var1 + var2 // função
//     return variavelfuncao;
// }

// variavelglobal = variavelF (x, y); // global
// //bloco - varaveis dentro de blocos com if, for, while...
// if (variavelglobal > 0) {
//     let maior = true //bloco
//     if (maior) {
//         console.log ('OK')
//     }
// }

// Função anonima 

// function exibirfuncao (){
//     console.log ('Olá')
// }

// exibirfuncao ()

// function exibirfuncao (callbackSucesso, callbackErro){
//     if (true){
//         callbackSucesso ("Funçôes de callback em caso de sucesso")
//     } else {
//         callbackErro ("Funções de callback em caso de erro.")
//     }
// }

// let callbackSucesso = function (titulo){
//     console.log (titulo)
// }

// let callbackErro = function (erro){
//     console.log (erro)
// }



