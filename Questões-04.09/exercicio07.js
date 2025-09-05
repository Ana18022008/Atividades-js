const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Valor do produto: \n > " ,  function (valorCompra){

valorCompra = parseFloat (valorCompra);

if (valorCompra < 20){
    let venda = valorCompra + (valorCompra * 0.45);
    console.log ("\n Valor de venda: " + venda + "R$.\n");
}else{
    venda = valorCompra + (valorCompra * 0.3);
    console.log ("\n Valor de venda: " + venda + "R$.\n");
}

rl.close();
});