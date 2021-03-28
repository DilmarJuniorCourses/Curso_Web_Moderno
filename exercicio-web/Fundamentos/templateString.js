//templateString permite que façamos coisas que o string não permite

const nome  = "Rebeca";
const concatenacao = "Olá " +nome+ "!";
const template = `\nOlá 
${nome} !` //Para inserirmos e usarmos templateString utilizamos crases. 

console.log(concatenacao, template);

//Expressõs...
console.log(`1 + 1 = ${1 + 1}`); //Template faz com que o JS imprima oque esta nas crases e interprete o que esta depois do dolar

//Expressão Arrow:
const up = texto => texto.toUpperCase(); //A expressão toUpperCase() faz com que todo texto fique em maiusculo.

console.log (`Ei... ${up("cuidado")}`);
