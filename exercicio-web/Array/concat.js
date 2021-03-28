const filhas = ['Yolanda', 'Carina']
const filhos = ['Ueslley', 'Chorin']

const todos = filhas.concat(filhos)
console.log(todos)

const todosMais1 = filhas.concat(filhos, 'Avulso') //Posso adicionar elementos avulsos ao concat
console.log(todosMais1)

console.log([].concat([1,2], [3], [4,5], [[6,7]], 8))