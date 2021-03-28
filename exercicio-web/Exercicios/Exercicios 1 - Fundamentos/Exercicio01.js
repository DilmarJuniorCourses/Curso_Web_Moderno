/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function operacoes(num1, num2){
    let soma, sub, multi, divi

    soma = num1 + num2
    sub = num2 - num1
    multi = num1 * num2
    divi = num2/num1
    
    return soma + ", " + sub + ", " + multi +", "+ divi
}

console.log(operacoes(3,6))

operacoesArrow = (num1,num2) => {
    let soma, sub, multi, divi

    soma = num1 + num2
    sub = num2 - num1
    multi = num1 * num2
    divi = num2/num1
    
    return soma + ", " + sub + ", " + multi +", "+ divi
}

console.log(operacoesArrow(3,6))