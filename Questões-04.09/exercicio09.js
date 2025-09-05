const { futimes } = require('fs');
const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira o primeiro numero: \n > " , function (numero1){
rl.question ("\n Insira o segundo numero: \n > " , function (numero2){
rl.question ("\n Insira o terceiro numero: \n > " , function (numero3){

numero1 = parseFloat (numero1);
numero2 = parseFloat (numero2);
numero3 = parseFloat (numero3);

let numeros = [numero1, numero2, numero3];
numeros.sort();

console.log ("\n " + numeros + "\n");

rl.close();
})
})
})