//Arrays são vetores. Em JS os Arrays são dinamicos podendo aumentar e diminuir conforme adicionamos elementos
//Arrays são objetos indexados
//Podemos adicionar qualquer tipo de elemento à ele, porém não é recomendavel

const valores = [7.7, 8.9, 6.3, 9.2]; //Declaramos os Arrays com valores dentro de colchetes e separamos com virgula
console.log(valores[0], valores[3]); //Podemos imprimir os valores de um Array utilzando os indices
console.log(valores[4]); //Se tentarmos imprimir um índice que não existe o Array nao crasha, mas da unfield

valores[4] = 10; //Podemos adicionar elementos e posições ao vetor simplesmente atribuindo o caracter
console.log(valores); //Imprimindo o Array
console.log(valores.length); //A função .length imprime o tamanho do Array. É usada para imprimir o tamanho das coisas

valores.push({id: 3}, false, null, "Teste"); //A função .push adiciona elementos ao Array. Como eu disse, qualquer tipo de elemento, inclusive object
console.log(valores);

console.log(valores.pop); //A função .pop saca o ultimo elemento do Array, apagando ele e diminuindo sua posição
delete valores[0]; //A função delete apaga o elemento do Array por indice
console.log(valores);

console.log(typeof valores) //O tipo do Array é object

