/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const contaCelulas = (valorSolicitado) =>{

    let contCelulas100, contCelulas50, contCelulas10, contCelulas5, contCelulas1

    while(valorSolicitado >= 100){
        valorSolicitado = valorSolicitado - 100
        contCelulas100++
        return preparaResposta([contCelulas100, 100])
    }

    while (valorSolicitado >= 50){
        valorSolicitado = valorSolicitado - 50
        contCelulas50++
        return preparaResposta([contCelulas50, 50])
    }

    while (valorSolicitado >= 10) {
        valorSolicitado = valorSolicitado - 10
        contCelulas10++
        return preparaResposta([contCelulas10, 10])
    }

    while (valorSolicitado >= 5) {
        valorSolicitado = valorSolicitado - 5
        contCelulas5++
        return preparaResposta([contCelulas5, 5])
    }

    
    while (valorSolicitado >= 1) {
        valorSolicitado = valorSolicitado - 1
        contCelulas1++
        return preparaResposta([contCelulas1, 1])
    }

    
}

const preparaResposta = (funcaoContaCelulas) =>{
    
    if(funcaoContaCelulas[1] = 100)
        return funcaoContaCelulas[0]+" nota(s) de "+100+". "
    else if(funcaoContaCelulas[1] = 50)
        return funcaoContaCelulas[0]+" nota(s) de "+50+". "
    else if(funcaoContaCelulas[1] = 10)
        return funcaoContaCelulas[0]+" nota(s) de "+10+". "
    else if(funcaoContaCelulas[1] = 5)
        return funcaoContaCelulas[0]+" nota(s) de "+5+". "
    else if(funcaoContaCelulas[1] = 1)
        return funcaoContaCelulas[0]+" nota(s) de "+1+". "  
        
}

console.log(contaCelulas(18))