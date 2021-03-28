/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

const maiorMenor = (vetNum) =>{

    let guardaMaior = 0 
    let guardaMenor = 0

    for (let i = 0; i < vetNum.length; i++) {
            if(vetNum[i] > vetNum[guardaMaior])
                guardaMaior = i
            else if(vetNum[i] < vetNum[guardaMenor])
                guardaMenor = i
    }

    return "Maior número dentro do vetor: "+vetNum[guardaMaior]+". Menor: "+vetNum[guardaMenor]

}

const vetInteiros = []

for (let i = 0; i < 15; i++) {

    vetInteiros.push(Math.floor(Math.random() * 20))

}

console.log(vetInteiros)

console.log(maiorMenor(vetInteiros))