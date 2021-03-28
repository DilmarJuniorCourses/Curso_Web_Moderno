//Primeiro requerer o módulo FileSyste ou fs do node. Esse módulo é um módulo core do Node, ou seja, não precisa ser instalado

const fs = require('fs')

const caminho = __dirname + "/arquivo.json" //__dirname é uma constante que está presente em todos os módulos do node. Ele serve para falar o diretorio atual do arquivo

//Lendo de forma sincrona (Não é muito recomendado, principalmente para arquivos muito grandes, porque travaria o event loop ate terminar de ler)
const conteudo = fs.readFileSync(caminho, 'utf-8') //Nesse caso eu utilizo o método readFileSync, passando como parametro o caminho do arquivo e o encoding dele
console.log(conteudo) //Note que etorna o JSON na mesma formatação

//Lendo de forma Assincrona
//No caso da forma assincrona eu chamo o método readFile, passando como parametro o caminho, o encoding e uma função callback que retornara o elemento requerido assim que for terminado o método
fs.readFile(caminho,'utf-8', (err,conteudo) => { 
    const config = JSON.parse(conteudo)
    console.log(`Host: ${config.db.host} / Porta: ${config.db.port} `)
})

//Se o arquivo for JSON posso apenas le-lo sem problemas
const config = require('./arquivo.json')
console.log(config) //Note que dessa forma ele imprime antes do assinc, mesmo estando depois na ordem cronologica

//Ler a pasta/diretorio
fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteudo da Pasta...')
    console.log(arquivos)
})