//Destructuring desestrutura algo do código, como um objeto ou Array.
//Novo recurso do ES2015

//Declarando o objeto de forma literal
const pessoa ={
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

//Utilizando o Destructuring. Nesse caso utilizamos as chaves por se tratar de um objeto
//Destructuring agora, cria mais duas variaveis a nome e a idade com os valores do objeto pessoa
const {nome, idade} = pessoa;
console.log(nome, idade);

//Podemos utilizar esse método para criar variaveis com outros nomes
const {nome: n, idade: i } =pessoa;
console.log(n, i);

//Teste para vermos oque acontece se uma chave que não existe do objeto. Dará undefined
const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

//Destructurin utilizado num objeto dentro de outro objeto
const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);