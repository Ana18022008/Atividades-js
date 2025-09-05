const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Insira seu salário: \n > " ,  function (salario){
rl.question ("\n Insira o valor da prestação: \n > " , function (prestacao){
 
salario = parseFloat (salario);
prestacao = parseFloat (prestacao);

if (prestacao > salario*0.2){
    console.log ("Empréstimo não pode ser concedido! ");
}else{
    console.log ("Empréstimo pode ser concedido! ");
}
        rl.close()
})
})