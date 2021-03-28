const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Essa função de object faz com que retorne apenas as chaves dos atributos
console.log(Object.values(pessoa)) //Essa função de Objetct faz com que retorne apenas os valores
console.log(Object.entries(pessoa)) //Essa função de Object faz com que retorne um array com o par chave/valor

//Utilizando entries e E como elemento:
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Utilizando Destructuring:
Object.entries(pessoa).forEach(([chave, valor]) => { //Precisa colocar entre parenteses para ele entender que é destructuring
    console.log(`${chave} : ${valor}`)
} )

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Nesse caso estou dizendo se ele pode ou não ser enumerado
    writable: false, //Nesse caso estou dizendo se ele pode ou não ser alterado (Funciona como um freezy)
    value: '01/01/2019'
})

Object.defineProperty(pessoa, 'atura', {
    enumerable: false, //Nesse caso estou dizendo se ele pode ou não ser enumerado
    writable: false, //Nesse caso estou dizendo se ele pode ou não ser alterado (Funciona como um freezy)
    value: '1,95'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Objetct.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Ele pega o primeiro objeto listado e coloca os outros dentro dele

console.log(obj)
