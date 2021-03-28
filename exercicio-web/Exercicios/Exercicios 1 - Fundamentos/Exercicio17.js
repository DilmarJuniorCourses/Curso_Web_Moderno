/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

const calculaSalario = (planoAumento, salarioAtual) =>{

    planoEscolhido = planoAumento.toUpperCase()

    switch(planoEscolhido){
        case "A":
            return salarioAtual + (salarioAtual*0.1)
            break
        case "B":
            return salarioAtual + (salarioAtual*0.15)
            break
        case "C":
            return salarioAtual + (salarioAtual*0.2)
            break
        default:
            return "Plano inválido, tente novamente"
            break
    }
}

console.log(calculaSalario("A", 1000))
console.log(calculaSalario("B", 1000))
console.log(calculaSalario("C", 1000))
console.log(calculaSalario("D", 1000))


