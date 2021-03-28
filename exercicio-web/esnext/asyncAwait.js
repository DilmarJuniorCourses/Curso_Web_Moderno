//Fazendo o exemplo com promise...

//Requerendo o protocolo http
const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => { 
            let resultado = '' 
    
            res.on('data', dados => { 
                resultado += dados 
            })
    
            res.on('end', () => { 
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {reject(e)}
            })
        })
    })
}

//Recurso do ES8
//Objetivo do AsyncAwait é simplificar o uso de promises...
let obterAlunos = async () =>{ 
    //Tornando tudo mais sincrono
    const turmaA = await getTurma('A') //So posso usar await em funções marcadas como Async
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} //Retorna uma function AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes) )

