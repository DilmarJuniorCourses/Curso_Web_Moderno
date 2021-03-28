const escola = "Cod3r";

console.log(escola.charAt(4)); //A função "charAt()" retorna o caracter que estiver no indice indicado, a partido do indice 0
console.log(escola.charAt(5)); //Se passar do número de indices ele da erro
console.log(escola.charCodeAt(3));//A função "charCodeAt()"" te retorna o Unicode/tabela assk do valor no indice 
console.log(escola.indexOf("r"));//A função indexOf busca em qual indice o caracter indicado está.

console.log(escola.substring(1));//A função substring imprimi o texto a partir do  indice indicado
console.log(escola.substring(0, 3));//Colocando 2 indices ele começa pelo primeiro e termina no ultimo

console.log("Escola ".concat(escola).concat("!"));//A função concat concatena os textos e variáveis
console.log("Escola " + escola + "!");//Pode-se concatenar utilizando o simbolo de +
console.log(escola.replace(3, "e"));//A função replace substitui o primeiro caracter pelo segundo

console.log("Ana, Maria, Pedro".split(","))//A função split separa os caracteres utilizando o separador indicado





