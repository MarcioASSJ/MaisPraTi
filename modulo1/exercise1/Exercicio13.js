const prompt = require ('prompt-sync') ();

let N;

for (let i = 0; i < 5; i++){
    N = parseInt (prompt ("Digite o valor para N: "));
    for (let contador = 1; contador <= N; contador++){
        console.log (`${contador} * ${N} =`, contador * N);
    }
}