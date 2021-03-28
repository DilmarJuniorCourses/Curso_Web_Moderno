//Objeto é uma coleção de chave e valor

//Criando um objeto de forma literal vazio
const prod1 = {}; 

prod1.nome = "Celular Ultra Mega"; //Implementando chave e valor dinamicamente ao objeto. 
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //Você pode fazer assim, mas é melhor evitar

console.log(prod1);

//Criando um objeto com implementações internas de forma literal
const prod2 = { nome: "Camisa Polo", preco: 79.90};

console.log(prod2);