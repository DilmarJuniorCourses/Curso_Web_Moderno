const gerarNumerosAleatorios = (min, max, numerosProibidos) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve) => {
        const fatorMultipicacao = max - min + 1
        const aleatorio = parseInt((Math.random() * fatorMultipicacao) + min)
        if(numerosProibidos.includes(aleatorio))
            reject('Número Repetido !')
        else
            resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1){
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){ //Array(qtde).fill cria uma array com números undefined
                numeros.push(await gerarNumerosAleatorios(1,60,numeros))
        }
        return numeros
    }catch(e) {
        if(tentativas > 100){
            throw 'Não deu Certo !'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
