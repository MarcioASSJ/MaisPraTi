// 5. Calculando Valores em Arrays de Objetos

let alunos = [
    aluno1 = {
        nome: "Samuel",
        nota1: 9.5,
        nota2: 7
    },
    aluno2 = {
        nome: "Junior",
        nota1: 10,
        nota2: 8.2
    },
    aluno3 = {
        nome: "Thais",
        nota1: 6.9,
        nota2: 6
    }
]

for (let chave of alunos){
    let media = (chave.nota1 + chave.nota2) / 2
    console.log (`A média do aluno ${chave.nome} é: ${media.toFixed(2)}`)
}