// 12. Atualizando um Array de Objetos

let estoque=[
    {
        produto: "Teclado Gamer",
        quantidade: 5,
        minimo: 5
    },
    {
        produto: "Mouse Gamer",
        quantidade: 7,
        minimo: 9
    },
    {
        produto: "HeadSet",
        quantidade: 6,
        minimo:8
    },
]

estoque.forEach(quantidademinima=>{
    if(quantidademinima.quantidade<quantidademinima.minimo){
        quantidademinima.quantidade=quantidademinima.quantidade*2
    }
})

console.log(estoque)