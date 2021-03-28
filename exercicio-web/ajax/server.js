const { urlencoded } = require('body-parser')
const bodyParser = require('body-parser') //Faz o parser do body da requisição (Interpreta os dados e deixa prontos para serem usados)
const express = require('express')
const multer = require('multer') //Para Upload

const app = express() //Instanciando express e guardandno em app
//Middlewares que serão aplicados sempre que executar uma função (aplica para as requisições que chegarem)
app.use(express.static('.')) //Serve todos os arquivos staticos da pasta atual, no qual o server.js está
app.use(bodyParser.urlencoded({extended: true}))  //Interpreta os dados de formularios
app.use(bodyParser.json()) //Transforma .json em objeto

//configurando o storage
const storage = multer.diskStorage({ //Personaliza o nome e a pasta no momento de salvar ele
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    } 
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro...')
        }

        res.end('Concluido com sucesso !!')
    }) 
})

app.post('/formulario', (req, res) => {
        res.send({
            ...req.body, //Usei sprad, para pegar tudo que vier da requisição
            id: 8
        })
})

app.get('/parOuImpar', (req, res) => {
    //req.body 
    //req.query - Pega o dado no corpo localhost:8080/parOuImpar/123
    //req.params - Pega por query localhost:8080/parOuImpar?numero=123

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par':'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))