// OBJETOS

// OBJETOS SÃO REPRESENTAÇÕES DE UM MUNDO REAL, COMPOSTOS DE PROPRIEDADE E VALOR.

// const pessoa = {
//     nome: "Thais",
//     idade: 26,
//     profissao: "Vendedora",
//     empregada: true
// }

// pessoa.nome = "Tata" // alterar o atributo
// console.log (pessoa.nome);
// console.log (pessoa ['idade']);

// console.log (pessoa); 

// delete pessoa.profissao; // deletar atributo
// console.log (pessoa)

// const pessoa = {
//     nome: "Thais",
//     idade: 26,
//     profissao: "Vendedora",
//     empregada: true
// }

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`
// }

// console.log (pessoa.falar())
// console.log (pessoa)

// const chinelo = {
//     dona: "Angela",
//     cor: "rosa",
//     material: "borracha",
//     tamanho: 36
// }

// console.log (chinelo)

// chinelo.apresentacao = function (){
//     return `Sou o chinelo da ${this.dona}.`
//}

// console.log (chinelo.apresentacao());

// for (let chave in chinelo){ // for in percorre toda o objeto  --- CHAVE representa todos os atributos do objeto
//     console.log (chave + ": " + chinelo[chave])
// } // itera sobre todas propriedades enumeraveis de um objeto. Ele retorna a posição do valor

// let numeros = [1, 2, 3]

// for (let numero of numeros){ // funciona melhor com arrays --- util para acessar todos os valores do array
//     console.log (numero)
// } // itera sobre valores de estruturas iteraveis como arrays, strings, etc.

// EXERCICIO 

// const veiculo = [
//     {
//     marca: "Fiat",
//     modelo: "Palio",
//     cor: "Preto",
//     preco: 40500
//     },   
//     {
//     marca: "Chevrolet",
//     modelo: "Onix",
//     cor: "Branco",
//     preco: 61000
//     }
// ]

// for (let chave in veiculo){
//     console.log (veiculo[chave]);
// }

// for (let chave of veiculo){
//     console.log (chave ['modelo']);
// }

// FOREACH

// let cores = ['Rosa', 'Roxo', 'Verde']

// cores.forEach (function (cor, indice) {
//     console.log (indice + ": " + cor)
// }) //PARA CADA elemento eu quero que se realize uma função

/*
    construa um array de numeros e calcule a soma total dos numeros e 
    tambem imprima cada numero multiplicando por dois.
*/

// let numero = [1, 2, 3, 4];
// let soma = 0;

// numero.forEach ((value) => {
//     console.log (`Multiplicação por 2: ${value*2}`);
//     soma += value;
// });

// console.log (`Soma: ${soma}`);

// let nome = 'Thais'
// let idade = 26
// let sexo = 'Feminino'

// let objeto = {
//     nome,
//     idade,
//     sexo
// }

// console.log (objeto)

/*

For in itera sobre as chaves de um objeto ou indices de um array, é geralmente para percorrer propriedades de objetos.
For of itera diretamente sobre valores de objetos iteráveis (arrays, strings, etc), recomendado para iterar sobre elementos de arrays ou valores de outros iteráveis e não deve ser usado para percorrer propriedades de objetos.

Em resumo, uso for in para iterar sobre chaves ou índices, e for of para iterar sobre valores.

*/

let BicicletaFactory = function (cor, tipo, marca){
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory ('Azul', 'Speed', 'Caloi')
let bicicleta2 = BicicletaFactory ('Preta', 'Mountain', 'BMX')

console.log (bicicleta1)
console.log (bicicleta2)