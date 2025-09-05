const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("\n Insira um número: \n > " , function (numero){
    numero = parseFloat(numero);

    if (numero > 20){
        let divisao = numero/2;
        console.log (divisao)
    }else{
        console.log (numero)
    }

    rl.close();
})