const express = require('express') //Importando express
const app = express() //Instanciando express

const bodyParser = require('body-parser') //Importando body-parser

app.use(bodyParser.urlencoded({ extended: true })) //Fazendo o parser do urlencoded

app.post('/usuarios', (req,resp) => { //Função middleware de requisição e resposta
    console.log(req.body)
    resp.send('<h1>Parabéns. usuário foi Incluido!!!</h1>')
})

app.post('/usuarios/:id', (req,resp) => { //Função middleware de requisição e resposta
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário foi Alterado!!!</h1>')
})
app.listen(3003)