//Para comparações de igual podemos utilizar o "==" que pergunta se tal dado é igual ao outro independente do tipo
//E o Estritamente igual que é "===" que pergunta se tal dado é igual ao outro inclusive o tipo

//Nesse caso ele retornara true porque estou usando a comparação simples
console.log("Caso 01) ", '1' == 1);
//Nesse caso ele retornara false porque estou usando a comparação estrita, e o tipo dos  dados é diferente
console.log("Caso 02) ", '1' === 1);
//Nesse caso estou perguntando se ele é diferente de forma simples, retornara false
console.log("Caso 03) ", '3' != 3);
//Nesse caso estou perguntando se os números são estritamente diferentes, oque retornara true
console.log("Caso 04) ", '3' !== 3);

//Comparadores classicos
console.log("Caso 05) ", 3 < 2);
console.log("Caso 06) ", 3 > 2);
//Nesse caso a linguagem pergunta se 3 é menor OU igual a 2
console.log("Caso 07) ", 3 <= 2);
console.log("Caso 08) ", 3 >= 2);

//Instanciando 2 datas
const d1 = new Date(0);
const d2 = new Date(0);

//Nesse caso ele está comparando dois espaços de memória entao retornará false
console.log("Caso 09) ", d1 === d2);
console.log("Caso 10) ", d1 == d2);
//Já nesse caso, ele os gets puxam os numbers do espaço de memória e ai são comparados, retornando true
console.log("Caso 11) ", d1.getTime() === d2.getTime());

//Comparando os dois de forma simples o valor sera true
console.log("Caso 12) ", undefined == null);
//Comparando os dois de for estrita será false, pois são tipos diferentes
console.log("Caso 12) ", undefined === null);
console.log("\nO tipo de undefined é: "+typeof undefined+" e o tipo de null é: " +typeof null);






