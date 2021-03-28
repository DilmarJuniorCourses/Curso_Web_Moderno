console.log(this === global) //this fora de uma função nao aponta para global
console.log(this === module) //this nao aponta para module

console.log(this === module.exports) //this fora de uma função aponta para module.exports
console.log(this === exports) //this fora de uma função aponta para exports porque module.exports e exports apontam para a mesma coisa

logThis = function(){
    console.log('\nDentro de uma função: ')
    console.log(this === module) //this nao aponta para module quando esta dentro de uma função
    console.log(this === module.exports) //this dentro de uma função não aponta para module.exports
    console.log(this === exports) //this dentro de uma função não aponta para exports porque module.exports e exports apontam para a mesma coisa

    console.log(this === global) //this dentro de uma função aponta para global, por isso temos que tomar cuidado
}

logThis()
