//Hoisting significar içar, ele leva a variavel pro topo

//Nesse caso a variavel var a é içada, então ela existe antes de ser declarada, apenas não é atribuida
console.log("a = ", a);
var a = 2;
console.log("a = ", a);

//Nesse caso a variavel Let não é içada, então ela nao existe antes de ser declarada e da erro
console.log("b = ", b);
let b = 2;
console.log("b = ", b);
