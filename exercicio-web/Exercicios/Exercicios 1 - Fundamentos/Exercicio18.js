/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const escreveNumeroExtenso = (num) =>{

    switch(num){
        case 1:
            return "Um"
            break
        case 2:
            return "Dois"
            break
        case 3:
            return "Três"
            break
        case 4:
            return "Quatro"
            break
        case 5:
            return "Cinco"
            break
        case 6:
            return "Seis"
            break
        case 7:
            return "Sete"
            break
        case 8:
            return "Oito"
            break
        case 9:
            return "Nove"
            break
        case 10:
            return "Dez"
            break
        default:
            return "Número fora do intervalo"
            break
    }

}

console.log(escreveNumeroExtenso(1))
console.log(escreveNumeroExtenso(2))
console.log(escreveNumeroExtenso(3))
console.log(escreveNumeroExtenso(4))
console.log(escreveNumeroExtenso(5))
console.log(escreveNumeroExtenso(6))
console.log(escreveNumeroExtenso(7))
console.log(escreveNumeroExtenso(8))
console.log(escreveNumeroExtenso(9))
console.log(escreveNumeroExtenso(10))
console.log(escreveNumeroExtenso(11))

