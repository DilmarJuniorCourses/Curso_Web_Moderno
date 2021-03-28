//Object.preventExtensions - Faz com que um objeto não possa ser aumentado. Você não consegue inserir atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: '1.99', tag: 'promocao'
})

console.log('Extensivo: ', Object.isExtensible(produto)) //Verifica se o objeto é extensivel

produto.nome = 'Borracha' //Consigo alterra valores
produto.descricao = 'Borracha escolar branca' //Não consigo aumentar o tamanho do objeto

delete produto.tag //Consigo apagar atributos
console.log(produto)

//Object.Seal - Sela um objeto e nesse caso não conseguimos nem remover nem aumentar o objeto, mas conseguimos alterar valores
const pessoa = {nome: 'Juliana',  idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) //Verifica se o objeto está selado

pessoa.sobrenome = 'Silva' //Não consigo adicionar um atributo
delete pessoa.nome //Não consigo apagar um atributo
pessoa.idade = 18 //Consigo alterar os valores

console.log(pessoa)

//Object.Freeze = selado + Valor constantes - Não deixa realizar nenhuma, repito, nenhuma alteração no objeto
