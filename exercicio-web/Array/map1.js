const nums =[1, 2, 3, 4, 5]

//Map é um for com proposito
//Map gera um novo array com o resultado, não modifica o Array anterior
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //ParseFloat para transformar em double, to fixed para fixar as casas depois da virgula e replace para trocar ponto por virgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) //Como eu usei a função paraDinheiro esse array agora retorna string

