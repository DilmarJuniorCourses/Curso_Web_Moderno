Array.prototype.filter2 = function(callback){
    
    let newArray = []
    for(let i = 0; i < this.length; i++){
       if(callback(this[i], i, this))
       newArray.push(this[i])
    }
        return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
    {nome: 'Peso de ouro', preco: 5250, fragil: false}
]


const retornaFrageis = prod => prod.fragil //Como fragil ja retorna um valor true e false não preciso fazer comparação == true
const retornaCaro = prod => prod.preco >= 500

console.log(produtos.filter2(retornaFrageis).filter2(retornaCaro))
console.log(produtos.filter(retornaFrageis).filter(retornaCaro))
