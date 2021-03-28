//Criando função construtora
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate breve', 456)
console.log(aula1, aula2)

//Simulando o new
function novo(f,...params){ //...params pega varios parametros e concatena todos em  um Array (operador sprading rest)
    const obj = {} //Cria o obj
    obj.__proto__ = f.prototype //Referencia/Associei o prototipo __proto__ do objeto ao atributo o f.prototype da função passada como parametro
    f.apply(obj, params) //Chama a função f que peguei como parametro (Executa função f passando como obj de contexto o obj que criei e passando os parametros que peguei)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Ate breve', 456)
console.log(aula3, aula4) //Valor identico ao aula1 e aula2
