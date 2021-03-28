/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const diaUtil = (diaEscolhido) =>{

    switch(diaEscolhido){
        case 1: 
            return "Domingo - Esse dia não é util ! "
            break
        case 2: 
            return "Segunda-Feira - Esse dia é util ! "
            break
        case 3: 
            return "Terça-Feira - Esse dia é util ! "
            break
        case 4: 
            return "Quarta-Feira - Esse dia é util ! "
            break
        case 5: 
            return "Quinta-Feira - Esse dia é util ! "
            break
        case 6: 
            return "Sexta-Feira - Esse dia é util ! "
            break
        case 7: 
            return "Sábado - Esse dia é semi-util ! "
            break
        default:
            return "Dia invalido ! Tente novamente"
            break
    }

}

console.log(diaUtil(1))
console.log(diaUtil(4))
console.log(diaUtil(6))
console.log(diaUtil(7))
console.log(diaUtil(10))



