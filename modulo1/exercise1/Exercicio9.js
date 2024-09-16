const prompt = require ('prompt-sync')();

let codigo = parseInt (prompt ("Digite o codigo de origem de seu produto: "));
let regiao

switch (true) {
    case (codigo === 1):
        regiao = "Sul";
        break
    case (codigo === 2):
        regiao = "Norte";
        break
    case (codigo === 3):
        regiao = "Leste";
        break
    case (codigo === 4):
        regiao = "Oeste";
        break
    case (codigo === 5 || codigo === 6):
        regiao = "Nordeste";
        break
    case (codigo === 7 || codigo === 8 || codigo === 9):
        regiao = "Sudeste";
        break
    case (codigo >= 10 && codigo <= 20):
        regiao = "Centro-Oeste";
        break
    case (codigo >= 25 && codigo <= 50):
        regiao = "Nordeste";
        break
    default:
        console.log ("Produto importado.")
}

console.log (`O produto é da região ${regiao}.`);