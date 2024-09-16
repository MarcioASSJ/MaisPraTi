// 6. Filtrando Arrays de Objetos

let funcionarios = [
    funcionario1 = {
        nome: "Samuel",
        cargo: "Diretor",
        salario: 7300
    },
    funcionario2 = {
        nome: "Junior",
        cargo: "Gerente",
        salario: 6000
    },
    funcionario3 = {
        nome: "Thais",
        cargo: "Vendedor",
        salario: 2300
    }
]

for (let chave of funcionarios){
    if (chave.salario >= 2500){
        console.log(chave)
    }
}