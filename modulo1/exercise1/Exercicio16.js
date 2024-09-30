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



let carros= Array()
carros[0] = 'Civic'
carros[1] = 10
carros [2] = true
carros ['Hyago'] = '10'

let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']
livros.push('Sherlock Holmes')
livros.unshift('1984')
livros.pop()
livros.shift()
console.log(livros)
livros.splice(2, 0, 'Animais Fantásticos') // splice index-0não remove e 1 substituisa-termo que quero adicionar, colocando apenas o 2 no comando ele vai apagar todos os indices a partir do 2
