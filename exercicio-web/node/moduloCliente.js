//Para importar usamos a função Require
const moduloA = require('./moduloA') // Nesse caso utilizo o caminho relativo "./"
const moduloB = require('./moduloB') //Como são arquivos .js eu nao preciso colocar a extensão. Porém outros arquivos eu precisaria

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)



