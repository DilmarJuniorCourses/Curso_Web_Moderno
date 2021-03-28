//Requerendo fs (FileSystem)
const fs = require('fs')

//Definindo caminho
const caminho = __dirname + '/promiseDados.txt'

//Criando promisse passando o caminho como parametro
const leitorArquivo = (caminho) =>{
    return new Promise((resolve, reject) =>{ 
        fs.readFile(caminho, 'utf-8', (err, conteudo) =>{ //Le o arquivo recebendo o caminho, o encoded e uma função callback com o conteudo e o erro
            try{
            console.log(`Arquivo lido com sucesso !`) //Comprova que o arquivo foi lido
            resolve(conteudo.toString()) //Retorna o texto lido
            } catch { //Caso nao consiga retorna o err
                reject(err)
            }
        })
    })
}

//leitorArquivo(caminho) 
 //   .then(console.log) //Imprime o arquivo
   // .catch(erro => console.log(erro)) //Imprime o erro

leitorArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(resultadoFinal => `O valor final é: ${resultadoFinal}`)
    .then(console.log)