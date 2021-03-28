/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (capInicial,txJuros, tempoAplica) =>{
    
    txJuros = txJuros/100

    let montante = capInicial + (capInicial * txJuros * tempoAplica)
    return montante
}

const jurosComposto = (capInicial, txJuros, tempoAplica) =>{

    txJuros = txJuros/100
    let eleva = 1 + txJuros
    let montante = (capInicial*(Math.pow(eleva,tempoAplica)))
    return montante.toFixed(2)
}

console.log(jurosSimples(1000,10,12))
console.log(jurosComposto(1000,10,12))
