//operador ... Rest(juntar)/Spread(espalhar)
//usar Rest como parâmetro em uma função

//Usar Spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.99}
const clone ={ active: true, ...funcionario} //Nenhuma alteração feita no clone afetará o original

console.log(funcionario)
console.log(clone)

//Usando Spread com array
const grupoA =['João', 'Pedro', 'Gloria']
const turmaFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(turmaFinal)

