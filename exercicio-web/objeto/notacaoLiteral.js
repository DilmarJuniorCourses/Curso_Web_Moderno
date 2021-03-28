a = 1
b = 2
c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} //Graças a nova versão do ES 2015 voce pode colocar apenas as variaveis que elas assmiram os nomes para fazer valores
console.log(obj1,obj2) //Quando impressos, os objetos são identicos

const nomeAttr = 'nota'
const valorAttr =  7.87

const obj3 = {}

obj3[nomeAttr] = valorAttr //Em JS podemos transformar string em nome atributo
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) 

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){ //A nova versão do ES 2015 permite que criemos versos simplificadas de funções dentro do objeto
        //...
    }
}

console.log(obj5)