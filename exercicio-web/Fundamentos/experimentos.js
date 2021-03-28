//Faremos nesse código alguns exemplos de JS em node
//Corra do escopo global

let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "Teste";

console.log(a);
console.log(global.b);
console.log(this.c)

console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//Criando variavel maluca sem var ou let

abc = 3; // Jamais faça isso !! isso cria a variavel direto no escopo global
console.log(global.abc)

// module.exports = {e: 456, f: false, g: "Teste"}
