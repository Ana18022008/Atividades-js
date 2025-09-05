const { futimes } = require('fs');
const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n 1. Adicionar item ao array \n 2. Sair \n > " , function (escolha){

    if (escolha == 1){
    rl.question ("\n Novo item: \n > " ,  function (item){

    let array
    })
    }
})