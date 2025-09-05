for (let numero = 1; numero <=30; numero++){

    if (numero%5 == 0 && numero%3 == 0){
        console.log(numero + " - FizzBuzz")
    }else if(numero%3 == 0){
        console.log(numero + " - Fizz")
    }else if (numero%5 == 0){
        console.log(numero + " - Buzz")
    }else{
        console.log(numero)
    }
}