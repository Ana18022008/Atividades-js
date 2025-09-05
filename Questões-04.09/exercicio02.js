const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira um valor: " , function(valor){
    valor = parseFloat(valor);
    let porcentagem = valor * 0.15;

    rl.question ("\n 1. Adicionar 15% \n 2. Retirar 15% \n >" , function (escolha){

        if (escolha == 1){
            let total = valor + porcentagem;
            console.log ("\n Total: R$" + total);
        }else if (escolha == 2){
            let total = valor - porcentagem;
            console.log ("\n Total: R$" + total);
        }else{
            console.log ("\n Valor inválido");
        }
        rl.close();
    }); 
})