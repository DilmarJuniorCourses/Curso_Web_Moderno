/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const valorConvenio = (idadeConveniado) =>{

    if(idadeConveniado < 10)
        return "R$ "+(100+80)
    else if(idadeConveniado >= 10 && idadeConveniado <= 30)
        return "R$ "+(100+50)
    else if(idadeConveniado > 30 && idadeConveniado <= 60)
        return "R$ "+(100+95)
    else
        return "R$ "+(100+130)
}

console.log(valorConvenio(9))
console.log(valorConvenio(90))
console.log(valorConvenio(19))
console.log(valorConvenio(10))
console.log(valorConvenio(45))



