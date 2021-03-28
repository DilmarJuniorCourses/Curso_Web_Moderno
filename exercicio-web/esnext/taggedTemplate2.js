function real (partes, ...valor){
    const resultado = []
    valor.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('') //Para juntar tudo em uma string
}

const preco = 29.9
const precoParcelado = 11
console.log(real `1x de ${preco} e 3x de ${precoParcelado}.`)