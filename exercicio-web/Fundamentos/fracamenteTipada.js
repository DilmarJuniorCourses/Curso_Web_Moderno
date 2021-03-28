/*JS é uma linguagem fracamente tipada*/

//Declaração da variável
var qualquer = 'Legal';

//Imprimir o tipo da variavel 'typeof'. Note que nesse momento a variável é do tipo string (texto)

console.log(qualquer);
console.log(typeof qualquer);

//Agora alteraremos o valor guardado em qualquer

qualquer = 6.658;

//Imprimir novamente a variável e o tipo de variável. NOte que nesse momento a variável ja é do tipo number(numerico)

console.log(qualquer);
console.log(typeof qualquer);

//Evite dar nomes genéricos e siglas para variaves como:

let valor = '';
let numero = 2;
let pqp = false // Produto Quimico Perigoso