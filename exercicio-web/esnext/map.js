//Map é uma estrutura que se difere do object porque no caso do object toda chave á um string literal
//No caso do map, podemos usar chaves variadas

const { Console } = require("console");

const tecnologias = new Map();
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

//Não se pode ter acesso aos valores dessa forma
console.log(tecnologias.react)
//Podemos fazer assim
console.log(tecnologias.get('react')); /*Ou*/ console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'] 
])

chavesVariadas.forEach((valor, chave) =>{
    console.log(`Chave: ${chave} Valor: ${valor}`)
})

console.log(chavesVariadas.has(123)) //Atributo has verificar se determinada Key existe no map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //Atributo has verificar se determinada Key existe no map
console.log(chavesVariadas.size)//Atributo size verifica o tamanho do map

chavesVariadas.set(123, 'a')
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)


