console.log(module.exports); //Ao imprimir um module.exports dessa sem alteração eu vejo que ele é um arquivo vazio
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //Posso atribuir a module.exports dessa forma
exports.b = 2 //Também posso dessa forma
module.exports.c = 3 //E dessa também

//A partir dai eu não consigo mais alterar module.exports a não ser por ele mesmo, qualquer outro tipo não funciona
exports = null;
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)
module.exports = {publico: true}