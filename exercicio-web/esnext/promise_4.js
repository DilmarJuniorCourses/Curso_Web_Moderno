const gerarNumerosAleatorios = (min, max, tempo) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve) => {
        setTimeout(function(){
            const fatorMultipicacao = max - min + 1
            const aleatorio = parseInt((Math.random() * fatorMultipicacao) + min) //Gerar numeros aleatorios entre intervalo é assim
        resolve(aleatorio)
        }, tempo)
    })
}


Promise.all([
    gerarNumerosAleatorios(1,60,4000),
    gerarNumerosAleatorios(1,60,1000),
    gerarNumerosAleatorios(1,60,500),
    gerarNumerosAleatorios(1,60,3000),
    gerarNumerosAleatorios(1,60,100),
    gerarNumerosAleatorios(1,60,1500),
    ]) .then(console.log)
