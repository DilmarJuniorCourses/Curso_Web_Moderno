//Set é uma estrutura para conjuntos, ele não aceita repetição e não é indexada
const times = new Set()

times.add('Cruzeiro')
times.add('Flamengo').add('São Paulo').add('Gremio').add('Palmeiras').add('America') //Podemos adicionar encadeando
times.add('Corinthians')
times.add('Flamengo') //Ele ignora quando se tenta adicionar um elemento ja existente

console.log(times)
console.log(times.size) //Verifica o tamanho do Set
console.log(times.has('flamengo')) //has verifica se existe um determonado elemento no Set. Faz diferenciação entre letras maiusculas
console.log(times.has('Flamengo')) //has verifica se existe um determonado elemento no Set. Faz diferenciação entre letras maiusculas
times.delete('Gremio')
console.log(times.has('Gremio'))

const nomes = ['Raquel', 'Lucas', 'Ana', 'Lucas' ]
const nomesSet = new Set(nomes)

console.log(nomesSet)