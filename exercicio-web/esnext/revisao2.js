//Arrow Function
const soma = (n1, n2) => n1 + n2
console.log(soma(3,2))

//Arrow Function this
//A grande diferença entre função normal e arrow function é que no caso da arrow o this é mais fixo e na normal o this pode variar, originalmente ele aponta para global
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro Default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais fortes')

//Operador Rest(Juntar) ele pode se chamar sprad
function total(...numeros){
    let total = 0
    console.log(numeros) //Rest guarda os valores em um Array
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))

