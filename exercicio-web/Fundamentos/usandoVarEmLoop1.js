//Como i é uma variavel tipo Var o escopo dela existe globalmente, então ela não existe apenas no bloco de repetição
for(var i = 0; i < 10; i++){
    console.log(i);
}

//Nesse caso i será o valor que fez ele sair do laço de repetição
console.log("i = ", i);

