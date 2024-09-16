// 15. Filtrando e Somando Valores

let transacoes = [
    {
        tipo: "+",
        valor: 20
    },
    {
        tipo: "-",
        valor: 3
    },
    {
        tipo: "+",
        valor: 7
    }
]
let valorTotal = 0

transacoes.forEach (chave => {
    if (chave.tipo === "+"){
        valorTotal += chave.valor
    } else {
        valorTotal -= chave.valor
    }
})

console.log(`O total das transações é: R$${valorTotal}`)