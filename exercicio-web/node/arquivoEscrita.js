//Requerendo módulo FileSystem do node
const fs = require('fs')

//Criando objeto de teste

const produto1 = {
    nome: "Banco Imobiliario",
    preco: 150.50,
    descricao: "Jogo de tabuleiro super Legal",
    situEstoque: true
}

const produto2 = {
    nome: "Caneca Mario Bros",
    preco: 50,
    descricao: "Caneca super legal do Super Mario Bros",
    situEstoque: true
}

//Para escrever eu utilizo o método writeFile(). Passando primeiro o caminho do diretorio com o __dirname, o objeto passado para json e a callback que testa se gerou um erro ou nao
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto1), err =>{
    console.log(err || "Produto cadastrado !")
} )

fs.writeFile(__dirname+'/arquivoGerado.json', JSON.stringify(produto2),err => {
    console.log(err || "Produto cadastrado !")
})