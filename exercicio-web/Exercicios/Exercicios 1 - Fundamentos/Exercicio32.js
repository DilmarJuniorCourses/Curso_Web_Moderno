/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

const calculaMedia = (vetNum) =>{

    let soma = 0

    for (let i = 0; i < vetNum.length; i++)
        soma = soma + vetNum[i]
    
    return soma/vetNum.length

}

const vetInteiros =[10,10,10,10,10,10,10,10]
const vetAleatorios = []

for (let i = 0; i < 10; i++) 
    vetAleatorios.push(Math.floor(Math.random()*20))


console.log("Média Vetor Inteiro: "+calculaMedia(vetInteiros)+"\n")
console.log("Vetor Aleatorio: \n"+vetAleatorios)
console.log("Média: "+calculaMedia(vetAleatorios))

