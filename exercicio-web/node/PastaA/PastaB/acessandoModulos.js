//Para acessar um modulo eu vou navegando pelo caminhi relativo ate o modulo
const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo)

//Posso usar o caminho absoluto também, mas não é muito recomendado (Usando a opção Copy Path): (Nesse caso não sei porque nao funcionou)
//const moduloB =require('C:\Users\JUNINHO\Desktop\Udemy\Curso Web Moderno\exercicios-js\Node\moduloB.js')
//console.log(moduloB)

const saudacao = require('saudacao') //Sempre que eu coloco uma require ele automaticamente aponta para o index.js
console.log(saudacao.bomDiaS)

const pastaC = require('./PastaC')
console.log(pastaC.saudacaoC)

//Você pode também acessar os modulos core que ja vem com o node

const http = require('http') //tambem nao preciso referenciar caminho relativo, porque é core do node
http.createServer((req, res) => { //passando como parametro uma requisição e uma resposta
    res.write('Bom dia !!!!')
    res.end()
}).listen(8080)
