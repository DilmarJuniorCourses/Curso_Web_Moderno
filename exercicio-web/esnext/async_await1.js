const { resolve } = require("path")

function esperaPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000)
    })
}

/*esperaPor(2000)
    .then(() => console.log(`Executando promisse 1...`))
    .then(esperaPor)
    .then(() => console.log(`Executando promisse 2...`))
    .then(esperaPor)
    .then(() => console.log(`Executando promisse 3...`))*/



function retornarValor(){
    return new Promise (resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido(){
    return 20
}

async function executar(){
    let valor = await retornarValor()

    await esperaPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperaPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperaPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executar() .then(console.log)

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()