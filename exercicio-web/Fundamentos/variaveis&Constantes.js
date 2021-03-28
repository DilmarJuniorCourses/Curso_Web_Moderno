/*No Java iscript temos 3 palavras reservadas para declarar Variaveis e Constantes
Sendo elas : var (Variável), let(Variável - mais recomendada) e const (Constante)*/


//Declarando variaveis
var a = 3;
let b = 4;

console.log("Imprimindo as variaveis sem alterações: ");
console.log(a,b);

//Alterando as variaveis

/* No caso de utilizarmos 'var' a variavel pode ser declarada novamento no mesmo escopo sem problemas, 
realizando assim a alteração*/
var a = 300;

//No caso de utilizarmos 'let' a variavel não pode ser declarada novamente no mesmo escopo, mas pode ser alterada
b = 400;

console.log("Imprimindo as variaveis com alteração: ");
console.log(a,b);

//Declarando Constantes
const c = 5;
console.log("Imprimindo a constante sem alterações: ");
console.log(c);

/* Por ser uma constante, 'c' não pode ser alterado em nenhum lugar do código, ou seja, ficara com o valor '5'
para sempre
//c = 50;*/
