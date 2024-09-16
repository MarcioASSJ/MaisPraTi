//4. Iterando Sobre Arrays de Objetos

let pessoas = [
    pessoa1 = {
        nome: "Samuel",
        idade: 2,
        cidade: "Canoas"
    },
    pessoa2 = {
        nome: "Junior",
        idade: 26,
        cidade: "Canoas"
    },
    pessoa3 = {
        nome: "Thais",
        idade: 27,
        cidade: "Canoas"
    }
]

for (let chave of pessoas){
    console.log (chave)
}