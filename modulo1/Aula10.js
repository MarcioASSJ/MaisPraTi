// const professor = {
//     nome: "Tony Stark",
//     materia: "Matematica",
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

// let somaNotas = 0;
// let numeroDeAlunos = 0;

// for (let chave in professor.notas){ // chave,x é a variavel gerada para percorrer todo objeto
//     somaNotas += professor.notas[chave]
//     numeroDeAlunos++
// }

// let media = somaNotas / numeroDeAlunos
// console.log (`A media das notas da turma é ${media.toFixed(2)}`);
// console.log (media >= 3 ? `A turma do ${professor.nome} esta acima da media de aprovação` : `A turma esta abaixo da média de aprovação`)

// const biblioteca = [
//     {titulo: '12 Regras para a Vida', autor: 'Jordan Peterson', ano: 1925},
//     {titulo: 'O Hobbit', autor: 'J.K. Tolkien', ano: 1937},
//     {titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009},
//     {titulo: 'Zé Carioca', autor: 'Disney', ano: 1940},
//     {titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021}, 
// ]

// for (livro of biblioteca){
//     if (livro.ano < 2000){
//         console.log (`O livro "${livro.titulo}", escrito por ${livro.autor}, foi publicado em ${livro.ano}.`)
//     }
// }

// const filmes = [
//     {titulo: 'Tropa de Elite', genero: 'Ação'},
//     {titulo: 'Capitão Fantastico', genero: 'Drama'},
//     {titulo: 'O Poderoso Chefão', genero: 'Crime'},
//     {titulo: 'Clube da Luta', genero: 'Drama'},
//     {titulo: 'Openheimer', genero: 'Biografia'},
//     {titulo: 'High School Musical', genero: 'Musical'},
//     {titulo: 'Barbie', genero: 'Live Action'},
// ]

// let somaGenero = {}

// filmes.forEach (filme => { // nesse caso, se já existir esse genero dentro do array, ele aumenta a contagem
//     if (somaGenero [filme.genero]){ // aqui ele esta testando se a informação existe
//         somaGenero [filme.genero]++
//     } else {
//         somaGenero [filme.genero] = 1 // se não existir ele cria e inicia a contagem com 1
//     }
// })

// for (let genero in somaGenero){
//     console.log (`${somaGenero[genero]} filme(s)  do genero ${genero}.`)
// }

/*

PESQUISA BINARIA = Pesquisa para otimizar processos 

*/

// const binarySearch = (list, item) => {
//     let low = 0
//     let high = list.length - 1

//     while (low <= high) {
//         const mid = Math.floor ((low + high)/2)
//         const guess = list [mid]

//         if (guess === item){
//             return mid 
//         } else if (guess > item){
//             high = mid -1
//         } else {
//             low = mid +1
//         }

//     }

//     return null
// }

// const myList = [0,1,2,3,4,5,6,7]
// console.log (binarySearch(myList,6))


/*
    spread = espalhar
    rest = juntar

*/

// let titulo = "Barbie"
// console.log (...titulo)
// console.log ([... titulo])

// let listatimes = ['Gremio', 'Football Porto Alegrense']
// let listatimes2 = ['São José', 'Pelotas']

// let listatimescompletos = ['Flamengo', 'São Paulo', ...listatimes, ...listatimes2]

// console.log (listatimescompletos)

// let pessoa = {nome: 'Pedro', idade: 15}
// let dadoscompletos = {endereço: 'Teste', ...pessoa}

// console.log (dadoscompletos)

// function soma (...param){
//     let resultado = 0

//     console.log (param)

//     param.forEach (elemento => resultado += elemento)

//     return resultado
// }

// console.log (soma (1,2,3,4))

function multiplication (m, ...p){
    console.log (m)
    console.log (p)

    let resultado = 0

    p.forEach (elemento => resultado += m * elemento)

    return resultado
}

console.log (multiplication (5,7,12,3,50)) // ele junta os 4 valores em um array e depois multiplica

