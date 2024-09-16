// 10. Criando Relatórios com Objetos e Arrays

let vendas = [
    {
        produto: "Feijão",
        quantidade: 3,
        preco: 8
    },
    {
        produto: "Massa",
        quantidade: 4,
        preco: 7
    },
    {
        produto: "Bolacha",
        quantidade: 6,
        preco: 3
    }
]

let totalGeral = 0

vendas.forEach (chave => {
    let totalVendas = chave.quantidade * chave.preco
    totalGeral += totalVendas
})

console.log (`O total de vendas é: R$${totalGeral.toFixed(2)}`)