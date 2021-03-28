//Em JS voce pode armazenar funções em variaveis e constantes
//Armazenando uma função em uma constante
const imprimirSoma = function (a, b)
{
    console.log(a + b);
}

console.log(imprimirSoma(2 , 3));

//Armazenando uma função arrow em uma variavel
const soma = (a , b ) => //Podemos utilizar "igual" e "maior que" ao invés de "function", isso é Arrow function
{
    return a + b;
}

console.log(soma(2, 3));

//retorno implícito
const subtracao = (a , b) => a - b //Para reduzir ainda mais a declaração podemos retornar implicitamente
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a+" 2"); //Podemos também reduzir mais ainda se for apenas um parametro
imprimir2("Teste");