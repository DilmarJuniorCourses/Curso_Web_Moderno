//ES8: Object.values e Object.entries
const obj = {a: 1, b: 2, c: 3}
//Ja existia o Object.Keys que retorna apenas as Keys
console.log(Object.keys(obj))
//Passou a existir o Object.values que retorna apenas os valores
console.log(Object.values(obj))
//Também passou a exisir o Object.Entries que retorna uma matriz de chave e valores
console.log(Object.entries(obj))

//Melhorias na Notação Literal de objeto
const nome = 'Carla'

const pessoa ={
    nome, //Não preciso colocar nome: nome
    ola(){ //Não preciso fazer ola: function()...
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
//herança em JS
class Cachorro extends Animal{
    falar(){
        return 'Au au au !'
    }
}
//Para instanciar eu utilizo a palavra reservada new
console.log(new Cachorro().falar())
