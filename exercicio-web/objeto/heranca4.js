//Criando uma função que cria um objeto de Meuobjeto
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Quando dois objetos nascem da mesma função, eles possuem o mesmo __proto__
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

//Atribuindo um atributo a MeuObjeto. Todo objeto filho dele também terá esse atributo
MeuObjeto.prototype.nome = 'Anônimo'

MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia ! Meu nome é ${this.nome}`)
}

//Utilizando a função falar que foi atribuida no objeto Pai
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

//Atribuindo o atributo MeuObjeto.prototype para o prototype __proto__ de obj3, ou seja mudando sua referencia original
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo essa loucura...

//Todo objeto criado a partir de MeuObjeto tera seu proto apontado para MeuObjeto.prototype
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
//O proto de MeuObjeto é a função prototype
console.log(MeuObjeto.__proto__ === Function.prototype)
//O proto da função prototype é o Object.prototype, ou seja, o Objeto pai de todos
console.log(Function.prototype.__proto__ === Object.prototype)
//Não existe ninguem acima de Object.prototype
console.log(Object.prototype.__proto__ === null)