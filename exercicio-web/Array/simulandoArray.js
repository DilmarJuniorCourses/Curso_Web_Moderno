//Da para simular um array utilizando indexação numerica
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

//Inserindo a função toString para fazer o objeto ser impresso como um array
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)}, 
    enumerable: false
})

const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray[0])
console.log(meuArray[0])

console.log(quaseArray.toString(), meuArray)
