//Passando pelos tipos Boleanos
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //Para que o JS reconheça e converta um caracter para booleano, voce precisa colocar !!(dupla negação)

console.log("Os Booleanos verdadeiros: ");
console.log(!!3); //Todo numero diferende de 0 dá true
console.log(!!-1);
console.log(!!' '); //Strings com espaço vazio também resultam em true
console.log(!!" ");
console.log(!!"texto"); //Qualquer texto resulta em true
console.log(!![]); //Arrays resultam em true
console.log(!!{});//Objetos diretos resultam em true
console.log(!!Infinity) //Infinity também resulta em true
console.log(!!(isAtivo = true)); //Atribuições verdadeiras resultam em true
console.log(!!(isAtivo = 1));

console.log("Os Booleanos Falsos: ");
console.log(!!0); //O numero 0 resulta em False
console.log(!!''); //Strings vazias resultam em False
console.log(!!"");
console.log(!!null); //null resulta em false
console.log(!!NaN); //Not a Number resulta em false
console.log(!!undefined); //Undefined resluta em false
console.log(!!(isAtivo = false)); //Atribuições falsas resultam em false

console.log("Para finalizar: ");
console.log(!!("" || null || 0 || " ")); //Sempre que ele compara com OU ele retorna o primeiro valor true que ele acha

let nome = "";
console.log (nome || "Desconhecido");

nome = "Lucas";
console.log (nome || "Desconhecido");





