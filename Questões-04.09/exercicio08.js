const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira sua idade: \n > " , function (idade){

    idade = parseFloat (idade);

    if (idade < 16){
        console.log ("\n Não Eleitor! \n");
    }else if (idade >=18 && idade <= 65){
        console.log ("\nEleitor Obrigatório! \n");
    }else{
        console.log ("\nEleitor Facultativo! \n");
    }

rl.close();   
})