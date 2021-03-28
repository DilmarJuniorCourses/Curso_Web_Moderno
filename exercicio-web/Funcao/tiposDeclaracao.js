/* No caso da function declaration, nós podemos chama-la em linhas antes da função ter sido declarada.
Isso acontece porque o interpretador do JS le todas as funções declaradas no estilo function declaration
antes de rodas o código propriamente. */ 
console.log(soma(3, 4));

//function declaration
function soma (x, y) //É a forma mais clássica de declaração de uma função
{
    return x + y;
}

//function expression
const sub = function(x, y)
{
    return x - y;
}

console.log(sub(3,4)); //Só é possivel chama-la depois da linha de declaração da função.

//named function expression
const mult = function mult(x, y)
{
    return x * y;
}
console.log(mult(3,4)); //Só é possivel chama-la depois da linha de declaração da função.

