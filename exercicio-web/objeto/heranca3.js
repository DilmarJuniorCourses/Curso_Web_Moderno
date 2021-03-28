const pai = {nome: 'Pedro', corDoCabelo: 'Preto'}

//Criando filhas usando create
const filha1 = Object.create(pai) //Passando pai como parametro no create, ele automaticamente é inserido como prototipo de filha
filha1.nome = 'Ana'
console.log(filha1.corDoCabelo) //Imprimindo propriedade herdada

//Criando segunda filha com mais atributos
const filha2 = Object.create(pai, {nome: { value: 'Bia', writable: false, enumerable: true}}) //criando passando propriedades

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

//imprimindo chaves especificas de filhas
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let Key in filha2){
    //Método para testar quais atributos foram adiquiridos por herança e quais sao originarios do objeto
    filha2.hasOwnProperty(Key) ? //Retorna true ou false para atributos que são do objeto ou sao por herança
    console.log(Key) : console.log(`Recebeu por herança ${Key}`)
}

