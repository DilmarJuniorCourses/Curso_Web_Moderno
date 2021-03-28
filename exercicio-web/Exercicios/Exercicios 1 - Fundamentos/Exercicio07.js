/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

const Bhaskara = (ax2 = 1, bx = 1, c = 1) =>{

    //D= b^2 - 4*a*c
    let D = Math.pow(bx,2) - (4*ax2*c)
    let X1, X2

    const vetResultador = []

        if(D == 0){
            X1 = (-(bx)+Math.sqrt(D)) / (2*ax2)
            vetResultador.push(X1.toFixed(2))

            return vetResultador

        }else if(D > 0){

            X1 = (-(bx)+Math.sqrt(D)) / (2*ax2)
            X2 = (-(bx)-Math.sqrt(D)) / (2*ax2)

            vetResultador.push(X1.toFixed(2))
            vetResultador.push(X2.toFixed(2))

            return vetResultador

        }else 
            return "Delta é negativo"
}

console.log(Bhaskara(3,-5,12))
console.log(Bhaskara(3,6,1))
console.log(Bhaskara(0,10,10 ))
console.log(Bhaskara(2, 10, 2))
console.log(Bhaskara())