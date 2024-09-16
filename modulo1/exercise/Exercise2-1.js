//1. Acessando Propriedades de Objetos

let carro={
    marca: "Fiat",
    modelo: "Idea Adventure Lock",
    ano: 2009,
    cor: "Preto"
}

for(let chave in carro){
    console.log(`${chave}: ${carro[chave]}`)
}