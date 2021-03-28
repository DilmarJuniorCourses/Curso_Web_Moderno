//Criando variaveis utilizando o destructuring
const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2; //Utiliza-se módulo de 2 para saber se um numero é par ou impár. Se resto for 0 número par se resto for 1 número impár

console.log(soma, subtracao, multiplicacao, divisao, modulo);