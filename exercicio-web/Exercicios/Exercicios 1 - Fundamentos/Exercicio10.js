/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

const divisívelPor3 = (num) =>{
    if((num % 3) == 0)
        return true
    else
        return false
}

console.log(divisívelPor3(9))
console.log(divisívelPor3(90))
console.log(divisívelPor3(10))
console.log(divisívelPor3(5))
console.log(divisívelPor3(15))
console.log(divisívelPor3(71))




