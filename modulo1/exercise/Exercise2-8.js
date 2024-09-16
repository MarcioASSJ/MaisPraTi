// 8. Criando Novos Arrays a Partir de Objetos

let filmes = [
    {
        titulo: "Vingadores: Ultimato",
        diretor: "Anthony Russo e Joe Russo",
        anoLancamento: 2019
    },
    {
        titulo: "A Proposta",
        diretor: "Anne Fletcher",
        anoLancamento: 2009
    },
    {
        titulo: "Deadpool & Wolverine",
        diretor: "Shawn Levy",
        anoLancamento: 2024
    },
]

let titulos = []

filmes.forEach(chave => {
    titulos.push (chave.titulo)
})

console.log (titulos)