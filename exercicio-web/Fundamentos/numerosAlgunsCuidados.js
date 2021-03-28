//Todo número que dividir por 0 em JS vai dar um valor infinito (infinity), não da erro igual na maioria das outras linguagens
 console.log(7 / 0);

 //JS faz operações matemáticas com numeros que estejam string, so não pode ter virgula ou alguma palavra
 console.log("10.2"/ 2);

 //Se colocar + para concatenar o + faz sentido para concatenar e ai ele não reconhece a operação
 console.log("3" + 2); // O resultado será 32

 //Já o - não faz sentido para concatenar, logo ele realiza a operação
 console.log("3" - 2 ) //O resultado será 1
 
 //Bug quando vamos fazer uma operação matemática com palavra por numero "NaN (Not a Number)"
 console.log("Show" * 2 );

 //JS pode ter algumas imprecisões
 console.log(0.1 + 0.7);

 //Não é possivel fazer uma função binaria diretamente no número:
    //console.log(10.toString()); - isso daria erro

//Coloque entre parenteses e ai da pra fazer função:
console.log((10.345).toFixed(2));

 



 