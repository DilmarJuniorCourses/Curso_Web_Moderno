// No caso do destructuring de array, temos que ficar espertos, porque o colchete fica a esquerda da operação e não a direita
const [a] = [10]; 
console.log(a);

//Eu posso pular chave valor do array
const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//Posso fazer com arrays dentro de arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);