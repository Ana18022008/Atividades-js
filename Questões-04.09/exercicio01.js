const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\nInsira um número: " , function(numero){
    numero = parseFloat(numero);

    console.log ("\nAntecessor - " + (numero-1) + " \nNumero - " + numero + "\nSucessor - " + (numero+1));
rl.close();
})
    