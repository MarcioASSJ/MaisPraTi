// Função anônima - é uma função sem nome que é envelopada dentro de uma variável
//sempre que eu chamar a variável vai executar a função

// let teste = function(){
//     console.log('Olá, mundo!')
// }

// teste()

// function showFunction(retornoDsucesso, retornoDerro){
//     if(false){
//         retornoDsucesso("Requisição bem sucessida")
//     } else {
//         retornoDerro("Erro na requisição")
//     }
// }

// let  sucesso = function(message){
//     console.log(message)
// }
// let erro = function(message){
//     console.error(message)
// }

// showFunction(sucesso, erro)

//Exercício de funções***************

// 1 soma dos elementos de um array

// let somaArray = function (){ //nessa linha posso optar por colocar ou não um parâmetro no parenteses
//     let cauculo=0
//     for (let i=0; i<numeros.length; i++){
//         cauculo+=numeros[i];
//     } 
//     return cauculo
// }

// let numeros=[10, 20, 30, 40]
// let soma=somaArray(numeros) // nessa linha é que chamo a função e passo para ela
                                //o nome do array do qual desejo usar na função

// console.log(soma)

// 2 encontrar o maior número de um Array

//     let maiorarray = function(arr){
//         let maior=arr[0]
//     for (let i=0; i<arr.length; i++){
//         if(arr[i]>maior){
//             maior=arr[i]
//         }
//     }
//     return maior
// }

// let numeros=[10, 20, 40, 30, 80]
// let numeros1=[10, 60, 40, 30, 70]
// let maior=maiorarray(numeros)

//     console.log(maior)


// 3 inverter array
// let inverterarray=function(arr){    
//     let inverso=[]
//     for(let i=arr.length-1; i>=0; i--){
//         inverso.push(normal[i])
//     }
//     return inverso
// }

// let normal=[1,2,3,4,5]
// let inverso=inverterarray(normal)
// console.log(`o inverso do array ${normal} é: ${inverso}`)


// 4 criar array mostrando apenas os pares
// let consultaPares=function(arr){
//     let pares=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             pares.push(arr[i])
//         }
//     }
//     return pares
// }
// let normais=[0,1,2,3,4,5,6,7,8,9,10]
// let normais2=[10,7,6,4,3,1,0]
// let pares=consultaPares(normais2)
// console.log(pares)

    // 5 Contar ocorrencias de um valor

// let contarOcorr = function(){
//     let count=0
//     for(let l=0; l<vet.length; l++){
//         if(vet[l] === value) {
//         count++
//         }
//     }  
//     return count
// }
// let vet=[10, 10, 7, 5, 10]
// let value = 10
// let count=contarOcorr(vet)


//     console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)





//---------------------------------- Manipulação de Strings

// let nome= "Márcio Junior"

// console.log("Márcio".length)
// console.log("Márcio".charAt(0))
// console.log(nome.indexOf('c'))
// // console.log(nome.replace('Márcio', 'Junior'))
// console.log(nome.substr(7, 6))
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim() + '-')


// console.log(Math.ceil(100.73)) //Arredonda para cima
// console.log(Math.floor(100.73)) //Arredonda para baixo
// console.log(Math.round(100.73)) //Arredonda de forma inteligente do meio para cima e para baixo
// console.log(Math.sqrt(100)) //raiz quadrada
// console.log(Math.pow(100, 2)) // potenciação
// console.log(Math.cbrt(100)) //raiz cúbica
// console.log(Math.abs(100.20)) //valor absoluto
// console.log(Math.random()) //número aleatório entre 0 e 1, se quiser algo maior basta *, como 0 e 100 batsa *100


//Datas
let date = new Date()

// console.log(date.getDate()) // Mostra o dia atual
// console.log(date.getMonth()+1) // Mostra o mês
// console.log(date.getFullYear()) // Mostra o ano

// console.log(date.toString()) //mostra a data completa
// date.setDate(date.getDate() + 720) //Adicionei 720 dias a data atual
// console.log(date.toString()) //mostra a data completa
// date.setFullYear(date.getFullYear() + 720) //Adicionei 720 anos a data atual
// console.log(date.toString()) //mostra a data completa


let date1 = new Date(2024, 7, 6)
let date2 = new Date(2023, 7, 6)

console.log(date1.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let milisegundos_entre_datas= Math.abs(date1.getTime()-date2.getTime())
console.log(milisegundos_entre_datas)

let milisegundos_por_dia=(1*24*60*60*1000)
console.log(`um dia tem ${milisegundos_por_dia} milisegundos`)
console.log(`a diferença entre as datas é de ${Math.ceil(milisegundos_entre_datas/milisegundos_por_dia)} dias`)


