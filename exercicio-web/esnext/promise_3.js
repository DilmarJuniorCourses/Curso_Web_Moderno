const gerarNumerosAleatorios = (min, max) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve) => {
        const fatorMultipicacao = max - min + 1
        const aleatorio = parseInt((Math.random() * fatorMultipicacao) + min) //Gerar numeros aleatorios entre intervalo é assim
        resolve(aleatorio)
    })
}

gerarNumerosAleatorios(1,60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi: ${numX10}`)
    .then(console.log)