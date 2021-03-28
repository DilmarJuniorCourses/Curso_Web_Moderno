const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
    {nome: 'Peso de ouro', preco: 5250, fragil: false}
]

console.log(produtos.filter(function(p){ //p representa todos os produtos, ou seja, os objetos dentro do array
    return false
}))

const retornaFrageis = prod => prod.fragil //Como fragil ja retorna um valor true e false não preciso fazer comparação == true
const retornaCaro = prod => prod.preco >= 500

console.log(produtos.filter(retornaFrageis).filter(retornaCaro))