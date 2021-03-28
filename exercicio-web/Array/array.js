//Array em JS é do tipo Object, todo new Array é do tipo object
console.log(typeof Array, typeof new Array, typeof [])

//Criando Array pelo método new
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Sobreescrevendo Array aprovados usando a forma literal
aprovados = ['Bia', 'Carlos', 'Ana']
//Assim como em outras linguagens o Array em JS também é indexado. Novamente assim como em outras linguagens ele se inicia no 0
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //Diferente das outras linguagens onde ao chamar um index que não existe, seria retornado um erro, em JS ele retorna undefined

aprovados[3] = 'Paulo' //Posso adicionar e alterar elementos dessa forma, porem, no caso de adicionar, esse método não é usual
aprovados.push('Abia') //Esse é o melhor método de se adicionar um elemento a um Array. Ele adiciona um elemento ao final do array
console.log(aprovados.length) 

aprovados[9] = 'Rafael' //Em JS posso adicionar um elemento em qualquer posição do array. Os elementos entre o array adicionado longe e os que ja existiam ficam undefined
console.log(aprovados.length) //Note que o tamanho cresceu até o elemento suspenso que criei
console.log(aprovados[8] === undefined) //Todo elemento de index 5 até 8 esta undefined

console.log(aprovados)
aprovados.sort()//Esse método organiza o array em ordem alfabetica. Ele altera totalmente o array de origem
console.log(aprovados)

delete aprovados[1] //esse método apaga o elemento que esta dentro do index, porém, ele não reorganiza o array ele coloca um undefined
console.log(aprovados[1])
console.log(aprovados[2])

//Declarando array aprovados novamente
aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1,1) //Esse método apaga ou insere elementos a partir do primeiro indice apontado (Indice de referencia, Numero de elementos que serao apagados, Elemento que sera adicionado, Elemento que sera adicionado,...,Elemento que será adicionado)
console.log(aprovados)




