const { futimes } = require('fs');
const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira o primeiro número: \n > " ,  function (numero1){
rl.question ("\n Insira o segundo número: \n > " ,  function (numero2){
rl.question ("\n Insira o terceiro número: \n > " ,  function (numero3){

    let numeros = [numero1, numero2, numero3];
    numeros.reverse();
    console.log ("\n " + numeros + "\n ");

    rl.close();
})
})
})