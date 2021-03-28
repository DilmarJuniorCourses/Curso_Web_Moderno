//Como array é um object, nos vamos sobreescrever o prototype de array com a função que queremos
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++)
        callback(this[i], i , this) //this é o proprio Array
    
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ 
   console.log(`${indice + 1} - ${nome}`)
})