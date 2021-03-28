//A variavel aponta para um espaço de memoria que aponta para o objeto
// pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
pessoa.end = 'Rua ABC'
console.log(pessoa)

//Eu consigo mudar atributos no objeto, porém, não consigo alterar a constante da erro
// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} () Da erro

Object.freeze(pessoa) //Object.freeze congela o objeto, tornando-o inalteravel

//Não importa oque eu faça aqui, por causa do freeze o objeto não será alterado
pessoa.nome = 'Maria'
pessoa.end = 'Rua DEF'
pessoa.telefone = 33448899

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //Posso criar um objeto dessa fora, tornando-o congelado desde o seu nascimento
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

