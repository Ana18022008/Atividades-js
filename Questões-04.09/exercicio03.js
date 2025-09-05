const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("\n Andou com o veículo por quanto tempo (em horas)?\n >", function (tempo){
rl.question ("\n Qual foi o velocidade média (Km/h)? \n >", function (velocidade){
    tempo = parseFloat(tempo);
    velocidade = parseFloat (velocidade);

let distancia = velocidade*tempo;

console.log ("\nDistância percorrida: " + distancia + " Km\n");

rl.close();
})    
})