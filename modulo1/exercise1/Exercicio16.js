let primos = Array ();
let contadorprimos = 0;
let numero = 101;

while (contadorprimos < 50) {
    let divisores = 0;
    let divisor = 1;

    while (divisor <= numero){
        if (numero % divisor === 0){
            divisores++
        }

        divisor++
    }

    if (divisores === 2){
        primos.push (numero);
        contadorprimos++;
    }

    numero++
}

console.log ("Os 50 numeros primos a partir de 100 são: ");
console.log (primos.join (", "));