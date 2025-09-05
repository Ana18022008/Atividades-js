const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nInsira a primeira nota: ", function(nota1){
rl.question("\nInsira a segunda nota: ", function(nota2){
rl.question("\nInsira a terceira nota: ", function (nota3){

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7){
    console.log ('\nSua média é : ' + media + ' - APROVADO');
}else{
    console.log ('\nSua média é : ' + media + ' - REPROVADO');
}

rl.close();

})
})
})