//3. Filtrando Propriedades de Objetos

let refrigerante1={
    tamanho600ml:6.5,
    tamanho1l:9.5,
    tamanho2l:11,
    fardo2l:60
}
let refrigerante2={}

function filtravalor(refrigerante) {
    for(let chave in refrigerante){
        if(refrigerante[chave] >= 9){
            refrigerante2[chave]=refrigerante[chave]
        }
    }
    return refrigerante2
}

refrigerante2=filtravalor(refrigerante1)
console.log(refrigerante2)
