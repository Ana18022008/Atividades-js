const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("\nInsira um número para obter seu fatorial: ", function(numero) {
    let fatorial = 1;
    numero = parseFloat(numero);

    for (let i = 1; i <= numero; i++){
        fatorial *= i
    }

    console.log(fatorial);

    rl.close();
});