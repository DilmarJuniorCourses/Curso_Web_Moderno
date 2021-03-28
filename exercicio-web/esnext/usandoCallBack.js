//Fazendo o exemplo sem promise...

//Requerendo o protocolo http
const http = require('http')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { //Pegando get de http passando a url como parametro e criando callback res
        let resultado = '' //resultado que acumulará tudo

        res.on('data', dados => { //Reage ao evento ondata
            resultado += dados //Resultado acumula resultado e dados
        })

        res.on('end', () => { //Criando um res que reage ao evento end(que acontece despois que os dados sao lidos)
            callback(JSON.parse(resultado)) //Passo como parametro da função callback o array proveniente do JSON
        })
    })
}

let nomes = [] //criando um array com let pois irei sobreescrevelo

getTurma('A', alunos => { //alunos pega como parametro um resultado
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
        getTurma('B', alunos => {
            nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
                getTurma('C', alunos => {
                    nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
                    console.log(nomes)
                })
        })
})