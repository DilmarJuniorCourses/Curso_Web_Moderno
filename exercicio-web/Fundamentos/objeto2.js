console.log(typeof Object);

//Nesse caso estou instanciando Object, ele deixa de ser uma função e se torna um objeto
console.log(typeof  new Object);

//Mesma coisa do exemplo anterior, ja que cliente é um objeto
const Cliente = function (){}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto{} //ES 2015 (ES06)

console.log(typeof Produto);
console.log(typeof new Produto); 