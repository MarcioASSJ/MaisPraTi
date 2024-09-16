// 13. Implementando um Carrinho de Compras

let carrinho = {
    itens: [
        {Nome: "Conjunto de dados", quantidade: 3, precoUnitario: 23.5},
        {Nome: "Grid RPG", quantidade: 4, precoUnitario: 7.5},
        {Nome: "Torre de dados", quantidade: 2, precoUnitario: 37},
        {Nome: "Miniaturas RPG", quantidade: 10, precoUnitario: 12},
    ]
}
let totalCarrinho = 0

carrinho.itens.forEach(chave => {
    totalCarrinho += chave.quantidade * chave.precoUnitario
})

console.log (`Total do carrinho: R$${totalCarrinho}`)