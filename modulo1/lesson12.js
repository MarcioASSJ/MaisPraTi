// Objetos: declarado com Chaves, dentro dele vai ter a chave: valor, ex:  nrTemp: 4,

// let serie = { 
//     nome: "The boys",
//     gereno: "Ação, Paródia, Herois",
//     nrTemp: 4,
//     status: "Em andamento",
//     classificação: 18,
//     nrEp: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 20,
//     },

//     mostrarCaracteristicas: function(){
//         return `O nome da série é: ${this.nome} e sua classificação é +${this.classificação}`
//     }
// }


// o termo THIS é usado para consultar uma variável dentro do objeto, por isso devo
// colocar ela dessa forma this.variávelDesejada


// console.log(serie)
// console.log(serie.nome)
// console.log(serie.mostrarCaracteristicas())


// let livro={
//     titulo: "O Hobbit",
//     autor: "J. R. R. Tolkien",
//     year: 1925,
//     mostrarCaracteristicas:function(){
//         return (this.titulo + " foi escrito por " + this.autor)
//     }
// }

// console.log(livro.mostrarCaracteristicas())


let carro={
    nome: "herbie",
    modelo: "Fusca",
    velocidade: 80,
    ano: 2000,
    acelerar:function(){
        return "acelerando com o pé"
    }
}

//console.log(carro)
//console.log(carro.acelerar())


let motor="1000"
let nome="bmw s1000rr"
let tipo="esportiva"

let moto={
    nome: nome,
    tipo: tipo,
    motor: motor,
}

//console.log(moto)


let atleta= {
    nome: "Rayssa",
    esporte: "Skate",
    idade: 16,
}   
//agora um exemplo de como atribuir elementos/chaves dentro de um objeto ja criado

atleta.nacionalidade='Brasil'
atleta.medalhas={
    ouro: 10,
    prata: 1,
    bronze:1,
}

atleta.celebrarVitoria=function(){ return "Ganhei!"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())





//Objetos são referencias na memória, não são copias, ou seja, se eu copiar para
//para uma nova variável vai ser uma referencia do objeto original na memória, alternado
//no "novo" objeto que criei, vai alterar no original

let obj1={
    nome: "Bruce",
    profissao: "Batman",
}

let obj2=obj1

obj2.companheiro="Robin"

// console.log(obj1)
// console.log(obj2)



//Função construtora

function computador (processador, gpu, ram, armazenamento) {
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function() {
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function() {
        return `
        processador: ${this.processador}
        gpu: ${this.gpu}
        ram: ${this.ram}
        armazenament: ${this.armazenamento}`
    }
}

let pc = new computador("I9", "RTX4090", "16Gb", "500Gb SSD")

// console.log(pc.mostrarEspecificacoes())




function jogos(titulo, genero, anoLancamento,empresa){
    return{
        titulo,
        genero,
        anoLancamento,
        empresa
    }
}

let jogo1=jogos("Final Fantasy", "RPG", "1997", "Square soft")

// console.log(jogo1)




// forin forof foreach

//for in
for(let chave in jogo1){
    console.log(`${chave}: ${jogo1[chave]}`)
}

// for of  ----consigo iterar dentro de objetos mas preferencialmente dentro de arrays
// pois o for of lida direto com valores, e não chaves 
const jogadores=['Pelé', 'CR7', 'Messi']

for (let jogador of jogadores){
    console.log(jogador)
}