//O Objeto é uma coleção de pares chaves/valores

//Formas de criação do objeto:
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'generica'
produto.preco = 220 //Podemos acessar um atributo de um objeto com o .

console.log(produto)

//Deletando Objetos
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

//Dentro de um objeto podemos ter varidos tipos de atributos:
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { //Incluindo Outros Objetos
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }

    },
    condutores: [{ //Ou arrays com objetos dentro
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 42
    }],

    calculaValorSeguro: function() { //E funções
        //...
    }

}

carro.proprietario.endereco.numero = 1000 //Podemos acessar o mais especifico atributo de um objeto utilizando o Ponto
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

//Delete carro.condutores

delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)