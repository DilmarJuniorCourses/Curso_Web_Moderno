//JS não faz diferenciação entre numeros inteiros e numeros decimais
//Declarando as variáveis

const peso1 = 1.0; //Mesmo colocando o .0 esse número continua sendo lido como inteiro
const peso2 = Number('2.0'); //Mesmo colocando entre parenteses o JS continua lendo isso como um número

console.log(peso1, peso2);

 /*A funcão "isInteger" pergunta ao compilador se peso 1 é inteiro ou não, 
 respondendo assim com uma resposta booleana ou seja: True ou False.*/
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 + peso2;
const media =total/(peso1 + peso2);

console.log(media.toFixed(2)); // A função "toFixed()" serve para decidir quantas casas queremos depois da virgula
console.log(media.toString(2)); // A função "toString()" no JS serve para mostrar o código binário
console.log(typeof media); //Retorna o tipo de dado de media
console.log(typeof Number) //Number com N maiusculo é uma função, seu tipo é função (function).
