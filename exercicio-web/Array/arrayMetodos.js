const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop() //Esse método saca o ultimo elemento do Array, ou seja, o indice [n], retirando ele
console.log(pilotos)

pilotos.push('Verstappen') //Método push insere um elemento no final do array, ou seja, o indice [n]
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento no array, ou seja, o indice [0]
console.log(pilotos)

pilotos.unshift('Hamilton') //unshift adiciona um elemento ao inicio do array, ou seja, ao indice [0]
console.log(pilotos)

//Método splice pode remover ou adicionar um elemento

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //(Indice Referencial, Numero de elementos que serão apagados, Elementos que serão adicionados,...,Elementos que serão adicionados)
console.log(pilotos)

//Remover
pilotos.splice(2,1) //Remove a partir do indice 1, 1 item.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Gera um novo array com parte do array de origem, a partir do indice passado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //Quando eu coloco o ultimo indice de referencia ele não entra no slice
console.log(algunsPilotos2)

const algunsPilotos3 = pilotos.slice(3,1) //Não foi possivel pegar ao contrario (do ultimo para o primeiro)
console.log(algunsPilotos3)

