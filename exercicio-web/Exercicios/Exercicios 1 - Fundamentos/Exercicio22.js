/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const calculaValorAnuidade = (mesPagamento,valorAnuidade) =>{

    let montanteJurosAnuidade

    switch(mesPagamento){
        case 1:
            return "Mês de pagamento: Janeiro / Juros por mês: 5%  - Total a ser pago: R$"+valorAnuidade
            break
        case 2:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,1))
            return "Mês de pagamento: Fevereiro / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 3:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,2))
            return "Mês de pagamento: Março / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 4:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,3))
            return "Mês de pagamento: Abril / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 5:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,4))
            return "Mês de pagamento: Maio / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 6:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,5))
            return "Mês de pagamento: Junho / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 7:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,6))
            return "Mês de pagamento: Julho / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 8:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,7))
            return "Mês de pagamento: Agosto / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 9:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,8))
            return "Mês de pagamento: Setembro / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 10:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,9))
            return "Mês de pagamento: Outubro / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 11:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,10))
            return "Mês de pagamento: Novembro / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
        case 12:
            montanteJurosAnuidade = valorAnuidade*(Math.pow(1.05,11))
            return "Mês de pagamento: Dezembro / Juros por mês: 5%  - Total a ser pago: R$"+montanteJurosAnuidade.toFixed(2)
            break
    }
}

console.log(calculaValorAnuidade(1,1000))
console.log(calculaValorAnuidade(2,1000))
console.log(calculaValorAnuidade(3,1000))
console.log(calculaValorAnuidade(4,1000))
console.log(calculaValorAnuidade(5,1000))
console.log(calculaValorAnuidade(6,1000))
console.log(calculaValorAnuidade(7,1000))
console.log(calculaValorAnuidade(8,1000))
console.log(calculaValorAnuidade(9,1000))
console.log(calculaValorAnuidade(10,1000))
console.log(calculaValorAnuidade(11,1000))
console.log(calculaValorAnuidade(12,1000))
