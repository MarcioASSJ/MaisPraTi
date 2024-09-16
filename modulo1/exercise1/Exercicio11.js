const prompt = require ('prompt-sync') ();

do {
    num = parseInt (prompt ("Digite um valor inteiro: "));
    if (num % 2 === 0) {
        console.log ("O numero digitado é par.");
    } else {
        console.log ("O numero digitado é impar.");
    }
} while (num > 0) 
  
console.log ("Programa finalizado.")

