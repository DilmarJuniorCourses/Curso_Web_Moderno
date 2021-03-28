//Descobrindo tipos
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Atribuindo uma função para o atributo string.prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('') //Split separa os elementos de um string em um array, reverse inverte, join junta
}

//chamando Função reverse() para inverter o string
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0] //utilizar o this para referenciar o elemento do objeto
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

//Você também pode sobreescrever uma função que ja existe
//NUNCA FAÇA ISSO !!!
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())