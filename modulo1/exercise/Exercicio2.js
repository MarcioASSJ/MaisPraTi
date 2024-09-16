const prompt = require ('prompt-sync')();

let eleitores = parseInt (prompt ("Digite o numeros de eleitores da cidade: "));
let votosvalidos = parseInt (prompt ("Digite a quantidade de votos validos: "));
let votosbrancos = parseInt (prompt ("Digite a quantidade de votos em branco: "));
let votosnulos = parseInt (prompt ("Digite a quantidade de votos nulos: "));

if (votosvalidos + votosbrancos + votosnulos <= eleitores){
    votosvalidos = (votosvalidos * 100) / eleitores
    votosbrancos = (votosbrancos * 100) /  eleitores
    votosnulos = (votosnulos * 100) / eleitores

    console.log (`Os votos validos representam ${votosvalidos}% dos votos.`);
    console.log (`Os votos brancos representam ${votosbrancos}% dos votos.`);
    console.log (`Os votos nulos representam ${votosnulos}% dos votos.`);
} else {
    console.log ("A quantidade de votos computada excede o numero de eleitores, verifique os votos e tente novamente.")
}







