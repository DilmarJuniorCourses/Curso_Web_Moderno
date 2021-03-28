/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const operacoesDivisao = (dividendo, divisor) =>{
    
    let resultado, resto

    resultado = dividendo/divisor
    resto = dividendo % divisor

    return "Resultado: "+resultado+"  Resto: "+resto
}

console.log(operacoesDivisao(10,5))
console.log(operacoesDivisao(11,6))
console.log(operacoesDivisao(4,8))
