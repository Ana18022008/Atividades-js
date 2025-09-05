const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira o primeiro número: \n > " , function (numero1){
rl.question ("\n Insira o segundo número: \n > " , function (numero2){
numero1 = parseFloat(numero1);
numero2 = parseFloat (numero2);

let soma =  numero1 + numero2;

if (soma > 10){
    console.log (numero1 + " + " + numero2 + " = " + soma);
}

rl.close();
})    
})