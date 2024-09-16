// 14. Manipulando Objetos Complexos

let empresa = {
    departamento: [
        {nome: "Atendimento",
         funcionarios: [
            {nome: "José"},   
            {nome: "João"},   
            {nome: "Jorge"}
         ] 
        },
        {nome: "Logistica",
         funcionarios: [
            {nome: "Maria"},   
            {nome: "Marcia"},   
            {nome: "Mauro"}   
         ]
        },
        {nome: "Administração",
         funcionarios: [
            {nome: "Bruno"},   
            {nome: "Brenda"},   
            {nome: "Bernadete"} 
         ]  
        }
    ]
}

for (let chave in empresa.departamento){
    let departamento = empresa.departamento[chave]
    console.log (`--Departamento: ${departamento.nome}`)
    console.log (`Funcionários:`)
    for (let key of departamento.funcionarios){
        console.log(key.nome)
    }

}