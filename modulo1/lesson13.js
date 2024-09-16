/* Calcular a média das notas dos alunos de um professor e verificar se está acima
da média de aprovação. Use um loop for..in para iterar sobre as propriedades dentro
professor.grades. Imprima se o professor está acima da média de aprovação(considerando 6.0
como média).
*/

// const professor={
//     name:"Tony Stark",
//     subject:"Physics",
//     grades:{
//         studant1:10.0,
//         studant2:6.0,
//         studant3:1.0
//     }
// }

// let sumGrades=0
// let numberOfStudants=0

// for(let studant in professor.grades){
//     sumGrades+=professor.grades[studant]
//     numberOfStudants++
// }

// let average=sumGrades/numberOfStudants

//console.log(`a nota média da turma é: ${average.toFixed(2)}`)
//console.log(average >=6 ?   //nessa linha está sendo usado um ternário(entendo como um if/else resumido)
//     `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média.`

// )



/* Verificar e listar livros publicados antes de 2000, usando for...of para iterar sobre o
array biblioteca. Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const library = [
//     {title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
//     {title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
//     {title: "Narnia", author: "C. S. Lewis", year: 2010}
// ]
  
// for(let book of library)
//     if(book.year < 2000){
//         console.log(book)
//     }




/* Contar a quantidade de filmes por gênero. Usando o étodo ForEach para iterar sobre o array
filmes. Para cada filme, verifique se o gênero já existe no objeto de contagem. Se existir,
incremente a contagem, se não, adicione o gênero ao objeto com a contagem inicial 1
*/

const movies = [
    {title: "Tropa de Elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
    {title: "Interestelar", genre: "Sci-Fi"},
    {title: "Senhor dos Anéis", genre: "Aventura"},
    {title: "Poderoso Chefão", genre: "Mafia"},
    {title: "Vingadores: Ultimato", genre: "Heróis"},
    {title: "Deadpool & Wolverine", genre: "Heróis"},
]

let genreCount={}

movies.forEach(movie =>{
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    }else{
        genreCount[movie.genre]=1
    }
})

for(let genre in genreCount){
    console.log(`Exuste ${genreCount[genre]} filmes do gênero ${genre}`)
}