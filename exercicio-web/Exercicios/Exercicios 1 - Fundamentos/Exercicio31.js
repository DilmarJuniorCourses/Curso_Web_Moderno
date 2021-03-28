/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const quantNegativos = (vetNum) =>{

    let numNegativos = 0
    for (let i = 0; i < vetNum.length; i++) {
        if (vetNum[i] < 0) 
            numNegativos++
    }

    return "Esse vetor possui "+numNegativos+" números negativos."
    

}

const vetInteiros = [-1,-2,-5,-4,8,5,6,3,4,10,-5,-668,-87,-812,5,987,-8,562,-562,-52,564,563,-5]

console.log(quantNegativos(vetInteiros))