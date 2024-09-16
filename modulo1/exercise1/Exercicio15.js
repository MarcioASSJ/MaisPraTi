const prompt = require ('prompt-sync')();

somamult = 0, somapeso = 0;
let n = parseFloat (prompt ("Digite um numero decimal (ou 0 para sair): "));

while (n !== 0) {
    let p = parseFloat (prompt ("Digite o peso do numero decimal (ou 0 para sair):  "));

    somamult = somamult + (n * p);
    somapeso = somapeso + p;
    
    n = parseFloat (prompt ("Digite um numero decimal (ou 0 para sair): "));
  
}

let media = somamult / somapeso;
console.log (`A media ponderada dos numeros inseridos é ${media.toFixed(2)}`);