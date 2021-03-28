const p = new Promise(function(resolve) {
    resolve(['Ana', 'Bianca', 'Delcio', 'Edgar', 'Flavia'])
})

const tornandoMinusculo = char => char = char.toLowerCase()
function imprimindoResultado(char){
    console.log(char)
}

p.then(valor => console.log(valor))

p 
    //a Função then pega apenas 1 parametro independente de quantos sejam passados
    .then(primeiraPessoa => primeiraPessoa = primeiraPessoa[0])
    .then(primeiraLetra => primeiraLetra = primeiraLetra[0]) //o proximo then pega o resultado do then de cima como param
    .then(tornandoMinusculo)
    .then(imprimindoResultado)