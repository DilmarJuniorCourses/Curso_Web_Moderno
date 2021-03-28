/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

const retornaDinheiro = (valor1, valor2) =>{

    let total = valor1+valor2
    return "R$"+ total.toFixed(2)

}

console.log(retornaDinheiro(0.1,0.2))

const retornaDinheiroComVirgula = (valor3, valor4) =>{

    let total1 = valor3 + valor4
    return "R$"+(((total1.toFixed(2)).toString()).replace(".", ",")) //Fiz essa operação para pegar o resultado e colocar a virgula.

}

console.log(retornaDinheiroComVirgula(0.1,0.2))
