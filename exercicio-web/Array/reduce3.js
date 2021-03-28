Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]

    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador,this[i], i, this) //Nesse caso pegamos o acumulador primeiro, guardamos em acumulador para ele ser passado novamente na callback
    }
    return acumulador
}

const soma = (total, atual) => atual + total
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))

//Fazer mesmo processo de reduce 2, porém dessa vez passaremos o valor inicial
Array.prototype.reduce3 = function(callback, valorInicial){
    
    const indiceInicial = valorInicial ? 0:1 //Se valor inicial for setado ele sera 0 se não sera 1
    let acumulador2 = valorInicial || this[0]

    for(let i = indiceInicial; i < this.length; i++){
        acumulador2 = callback(acumulador2,this[i], i, this) //Nesse caso pegamos o acumulador primeiro, guardamos em acumulador para ele ser passado novamente na callback
    }
    return acumulador2
}

const soma2 = (total, atual) => atual + total
const nums2 = [1, 2, 3, 4, 5, 6]
console.log(nums2.reduce3(soma2, 21))