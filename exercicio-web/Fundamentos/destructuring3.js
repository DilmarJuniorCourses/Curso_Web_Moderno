//Retorna um número randomico de min (0) a maximo (100)
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (min-max) + min;
    return Math.floor(valor);
 }

 const obj = {max: 50, min: 40}
 console.log(rand(obj));
 console.log(rand({min: 955}));
 console.log(rand({}));

 