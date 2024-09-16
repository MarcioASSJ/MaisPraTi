// let listadecoisas=Array()

// listadecoisas['hardware']=Array()
// listadecoisas['fruits']=Array()
// listadecoisas['pessoas']=Array()

// listadecoisas['hardware'][0]='Notebook'
// listadecoisas['hardware'][1]='Mouse'
// listadecoisas['hardware'][2]='teclado'



//console.table(listadecoisas.sort) //.sort ordena por ordem alfabética ---- .sort((a, b) => a-b)   usado para validar numeros inteiros, para saber qual o maior entre uma posição 'a' e 'b', valida todo o arrey


// Pesquisar dentro de um array --- .indexof
// listadefrutas[0]='Laranja'
// listadefrutas[1]='Maçã'
// listadefrutas[2]='Banana'
// listadefrutas[3]='Uva'

// let index= listadefrutas.indexof('Uva')

// if(index===-1){
//     console.log('Elemento não existe')
// }else{
//     console.log(`Elemento existe e está na posição: ${index}`)
// }


//--------------- FUNÇÔES

//Criando função -- Dar nome semântico() depois definir o que vai fazer e 
//por fim dar o return
// function calculararea(){
//     let area = altura*largura
//     return area
// }
// // declarado

// let altura=10
// let largura=200

// let area=calculararea(altura, largura)

// console.log(`a area possui ${area} metros quadrados`)
// A variável altura e largura posta dentro da função não precisa ter o mesmo 
//nome das variáveis que vou chamar fora da função depois de ter declarado ela

//Tem 3 escopo de variáveis no JavaScript, a global(funciona qaundo chamar ela 
//em qualquer local do código, é declarada usando 'var' e não 'let') a de Função(Funciona apenas dentro da função 
//declarada) e por fim a variavel de Bloco(fica dentro de um bloco como if ou while)

// a função usa valores e não altera a referência dentro da memória, ou seja
// a 'altura' dentro da função vai copiar o VALOR da variável 'altura' declarada
//fora da função conforme o código que escrevi, por isso não tem importância
//definir com o mesmo nome as variáveis da função com as de fora


//Criando uma função de ordenar em ordem alfabética

let alfabeto = ['A', 'D', 'C', 'B', 'F']

function ordenar(arrayParaOrdenar){
    return arrayParaOrdenar.sort()
}

console.log(ordenar(alfabeto))
