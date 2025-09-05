const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\nInsira uma temperatura em °C: " , function (temperaturaC){
    temperaturaC = parseFloat (temperaturaC);

    let temperaturaF = (temperaturaC * 1.8) + 32;
    
    console.log ("\n = " + temperaturaF + "°F\n");

    rl.close();
})