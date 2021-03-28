//Declarando a porta para utilizar na web. So se pode usar um processo por porta
const porta = 3003

//Importando as dependencia express
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
//Guardando em app a função express
const app = express()

app.use(bodyParser.urlencoded({ extended: true})) //urlencoded é uma função middle //Preciso passar o objeto extended: true, se nao ele da erro

//app.get (endereco, middleware)
//Esse método tras todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getListaProdutos()) //A função send converte o dado automaticamente para JSON
})

//Esse método trás um produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//app.post (endereco, middleware)
//Função para salvar o produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //req.body pega uma requisição vinda do corpo da aplicação, apontando o atributo
        preco: req.body.preco
    })
    res.send(produto) //Vai gerar um JSON
})

//Função para alterar o produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, //req.body pega uma requisição vinda do corpo da aplicação, apontando o atributo
        preco: req.body.preco
    })
    res.send(produto) //Vai gerar um JSON
})

//Função para excluir o produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluiProduto(req.params.id)
    res.send(produto) //Vai gerar um JSON
})

//app.listen (porta, callback que será executada)
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})


