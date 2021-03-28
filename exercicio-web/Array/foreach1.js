const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Foreach é usado para casos não muito especificos, ele geralmente apenas percorre o Array

//forEach no JS voce desenvolve dentro do parenteses
aprovados.forEach(function(nome, indice){ //1º Parametro: Elemento 2º Parametro: Indice 3º Parametro: O proprio Array completo do 4º Parametro para la é undefined
    console.log(`${indice + 1} - ${nome}`)
})

console.log("\n-----\n")

aprovados.forEach(nome => console.log(nome))// Posso utilizar apenas o 1º Parametro e imprimi-lo usando uma arrow function

console.log("\n-----\n")

//Posso guardar uma função em uma constante/variavel e utilizar ela para chamar o array
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
