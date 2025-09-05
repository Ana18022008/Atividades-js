const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("\n insira um ano: ", function (ano){
    ano = parseFloat(ano);
    definirAno = ano%4;

    if (definirAno == 0){
        console.log ("\n Este é um ano bissexto!\n");
    }else{
        console.log ("\n Este não é um ano bissexto!\n");
    }

    rl.close();
})