const readline = require('readline-sync');

const numeros = readline.questionInt('Insira a quantidade de números desejados: ');

    let ultimo = 0;
if (numeros > 0 && numeros < 46) {
    for (let i = 0; i < numeros; i++) {
        ultimo = ultimo + i;
    }
}
console.log(ultimo)