//Null serve para zerar o atributo Undefined para o compilador setar o bug

let valor; // Variavel Não Inicializada. Undefined diz que a variavel existe mas não foi inicializada
console.log(valor); // Undefined, porque ainda não está definido

valor = null; //Ausencia de valor, não ocupa nenhum espaço na memória
console.log(valor);
//console.log(valor.ToString()) // Erro porque não da pra acessar algo que esteja dentro de algo nulo

const produto = {};
console.log(produto.preco); //Dará Undefined porque não defini o objeto preco, apenas criei
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Não atribuir undefined explicitamente, deixar isso pra linguagem
console.log(!!produto.preco); //Retornar o valor booleano de preco
//delete produto.preco 
console.log(produto);

produto.preco = null; //Sem preco
console.log(!!produto.preco);
console.log(produto);