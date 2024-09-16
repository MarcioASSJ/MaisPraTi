const prompt = require ('prompt-sync')();

let lado1 = parseInt (prompt ("Digite o cumprimento do primeiro lado: "));
let lado2 = parseInt (prompt ("Digite o cumprimento do segundo lado: "));
let lado3 = parseInt (prompt ("Digite o cumprimento do terceiro lado: "));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log ("É possivel formar um triangulo com as medidas informadas.");
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        console.log ("As medidas informadas formam um triângulo equilátero.")
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        console.log ("As medidas informadas formam um triângulo escaleno.")
    } else {
        console.log ("As medidas informadas formam um triângulo isósceles.")
    }
} else {
    console.log ("As medidas informadas não formam um triângulo.")
}
