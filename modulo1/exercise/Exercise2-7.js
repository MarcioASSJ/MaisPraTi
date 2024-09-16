// 7. Modificando Objetos em um Array

let produtos = [
    produto1 = {
        nome: "Mouse Gamer",
        preco: 75,
        desconto: 10
    },
    produto2 = {
        nome: "Teclado Gamer",
        preco: 110,
        desconto: 10
    },
    produto3 = {
        nome: "Headset",
        preco: 50,
        desconto: 10
    }
]

produtos.forEach(chave => {
    let descontoValor = (chave.preco * chave.desconto) / 100
    let precoNovo = chave.preco - descontoValor

    console.log (`O ${chave.nome} está em promoção de R$${chave.preco.toFixed(2)} por R$${precoNovo.toFixed(2)}`)
})