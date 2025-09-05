const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um número: ', function(numero) {
   
      if(numero > 0){
        console.log('Você inseriu um número positivo.');
      }else if(numero < 0){
        console.log('Você inseriu um número negativo.')
      }else{
        console.log('Você inseriu um número neutro.')
      }
    rl.close();
  });
