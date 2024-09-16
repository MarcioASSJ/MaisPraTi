const prompt=require ('prompt-sync')();

// 1 soma dos elementos de um array
// let soma=0

// let numeros=[10, 20, 30, 40]

// for (let i=0; i<numeros.length; i++){
//     soma+=numeros[i];
// }   console.log(soma);

// 2 encontrar o maior número de um Array

// let numeros=[10, 20, 30, 40]
// let maior=numeros[0]

//     for (let i=0; i<numeros.length; i++){
//         if(numeros[i]>maior){
//             maior=numeros[i]
//         }
//     }console.log(maior)

// 3 inverter array
// let normal=[1,2,3,4,5]
// let inverso=[]

//     for(let i=normal.length-1; i>=0; i--){
//         inverso.push(normal[i])
//     }console.log(inverso)

// 4 criar array mostrando apenas os pares
// let normais=[0,1,2,3,4,5,6,7,8,9]
// let pares=[]

// for(let i=0; i<normais.length; i++){
//     if(normais[i]%2===0){
//         pares.push(normais[i])
//     }
// }
// console.log(pares)

// 5 Contar ocorrencias de um valor
// let vet=[10, 10, 7, 5, 10]
// let value = 10
// let count = 0

//     for(let l=0; l<vet.length; l++){
//         if(vet[l] === value) {
//         count++
//         }
//     }
//     console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)

// 6 arrays vetores multidimencionais

// let matriz=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// // console.table(matriz)
// // console.log(matriz[0][2])

// for (let i=0;i<matriz.length;i++){
//     for(let j=0;j<matriz[i].length;j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let arr2=[
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado=[]    

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
        throw new Error("Os arrays deven ter o mesmo tamanho.")
    }

for(let i = 0;arr1.length; i++){
    let somalinha = []
        for(let j = 0; j < arr1[i].length; j++){
            somalinha.push(arr1[i][j] + arr2[i][j])
        }
        resultado.push(somalinha)
}
console.table(resultado)