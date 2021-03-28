const ObjetoA = require('./instanciaUnica')
const ObjetoB = require('./instanciaUnica')

const ObjetoC = require('./instanciaNova')() //Nesse caso eu preciso usar os parenteses() para invocar a função
const ObjetoD = require('./instanciaNova')()

ObjetoA.inc()
ObjetoA.inc()
console.log(`ObjetoA: ${ObjetoA.valor} / ObjetoB: ${ObjetoB.valor}`)

ObjetoC.inc()
ObjetoC.inc()
console.log(`ObjetoC: ${ObjetoC.valor} / ObjetoD: ${ObjetoD.valor}`)

