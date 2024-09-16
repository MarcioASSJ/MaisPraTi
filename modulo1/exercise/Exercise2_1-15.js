//1. Acessando Propriedades de Objetos

// let carro={
//     marca: "Fiat",
//     modelo: "Idea Adventure Lock",
//     ano: 2009,
//     cor: "Preto"
// }

// for(let chave in carro){
//     console.log(`${chave}: ${carro[chave]}`)
// }

//2. Verificando Propriedades

// let livro={
//     titulo: "A Garota no Gelo",
//     autor: "Robert Bryndza",
//     anoPublicacao: 2016,
//     gereno: "Investigação"
// }

// let contEditora=0
// for(let chave in livro){

//     if(chave === "editora"){
//         contEditora++
//     }
// }
    
//     if(contEditora===0){
//         livro.editora= "Gutenberg"
//     }
//     console.log(livro)

//3. Filtrando Propriedades de Objetos

// let refrigerante1={
//     tamanho600ml:6.5,
//     tamanho1l:9.5,
//     tamanho2l:11,
//     fardo2l:60
// }
// let refrigerante2={}

// function filtravalor(refrigerante) {
//     for(let chave in refrigerante){
//         if(refrigerante[chave] >= 9){
//             refrigerante2[chave]=refrigerante[chave]
//         }
//     }
//     return refrigerante2
// }

// refrigerante2=filtravalor(refrigerante1)
// console.log(refrigerante2)


// 12. Atualizando um Array de Objetos

// let estoque=[
//     {
//         produto: "Teclado Gamer",
//         quantidade: 5,
//         minimo: 5
//     },
//     {
//         produto: "Mouse Gamer",
//         quantidade: 7,
//         minimo: 9
//     },
//     {
//         produto: "HeadSet",
//         quantidade: 6,
//         minimo:8
//     },
// ]

// estoque.forEach(quantidademinima=>{
//     if(quantidademinima.quantidade<quantidademinima.minimo){
//         quantidademinima.quantidade=quantidademinima.quantidade*2
//     }
// })

// console.log(estoque)