/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const numIntervalo = (vetNum) =>{

    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0
    

        for (let i = 0; i < vetNum.length; i++) {
            if(vetNum[i] >= 10 && vetNum[i] <= 20)
                dentroDoIntervalo++
            else
                foraDoIntervalo++  
        }

        return "Esse vetor possui "+dentroDoIntervalo+" números dentro do intervalo [10,20] e "+foraDoIntervalo+" fora desse intervalo."
}

const vetNumeros = []

for (let i = 0; i < 15; i++) {
    vetNumeros.push(Math.floor(Math.random()*30))
}

console.log(vetNumeros)

console.log(numIntervalo(vetNumeros))