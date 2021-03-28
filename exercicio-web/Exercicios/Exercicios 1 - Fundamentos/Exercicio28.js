/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const descobreParEImpar = (vetInt) =>{

        let pares = 0
        let impares = 0
        for (let i = 0; i < vetInt.length; i++) {
            if((vetInt[i]%2) == 0)
                pares++
            else
                impares++
        }
        return "Esse vetor possui "+pares+" números pares e "+impares+" números impares."
}

console.log(descobreParEImpar([1,2,3,4,5,6,7,8,9,10,11]))