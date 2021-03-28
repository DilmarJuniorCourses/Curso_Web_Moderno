//Declarando objetos de forma literal
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) //O objeto não possui a função prototype
console.log(ferrari.__proto__) // __proto__ aponta para o maior objeto na cadeia de objetos
console.log(ferrari.__proto__ === Object.prototype) // __proto__ é estritamente igual a função prototype de Objetct(que é o mair na cadeia)
console.log(volvo.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__) //Não existe nenhum objeto acima de Object.prototype, por isso retorna null
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto) //Objetos são funções
console.log(Object.prototype, MeuObjeto.prototype)
