// 9. Contabilizando Elementos com uma Condição

let clientes = [
    {
        nome: "Smauel",
        idade: 2,
        cidade: "Canoas"
    },
    {
        nome: "Thais",
        idade: 27,
        cidade: "Canoas"
    },
    {
        nome: "Junior",
        idade: 26,
        cidade: "Canoas"
    }
]
let contador = 0

clientes.forEach(chave => {
    if (chave.idade > 25){
        contador++
    }
})

console.log (`Na lista existe ${contador} clientes tem mais de 25 anos.`)