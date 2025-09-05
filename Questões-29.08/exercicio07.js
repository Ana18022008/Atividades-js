const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\nInsira uma palavra: " , function (entrada){
    let palavra = Array.from(entrada);
    let palindromo = Array.from (palavra);
    palindromo = palindromo.reverse();

    palavra = palavra.join("");
    palindromo = palindromo.join("");

    if (palavra == palindromo){
        console.log ("É um palindromo!");
    }else{
        console.log ("Não é um palindromo! ");
    }
    rl.close();
})