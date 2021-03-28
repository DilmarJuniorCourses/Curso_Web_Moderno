/*12) Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = (num) =>{
    let fatorial = 1
    while (num != 1) {
        fatorial = fatorial * num
        num--
    }

    return fatorial
}

console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(10))

