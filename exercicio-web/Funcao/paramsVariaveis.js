//JS permite que você passe um número variavel de parametros para uma função

function soma()
{
    let soma = 0
        for ( i in arguments) { //Arguments é um array interno que existe em toda função. Todos os parametros passados ficam nele.
            soma += arguments[i];
        }
        return soma
}

console.log(soma()); //Posso continuar passando nenhum parametro, nesse caso o resultado será 0. Pois iniciei a variavel soma com o 0
console.log(soma(1)); //Posso passar apenas 1 parametro
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, "Teste")); //Posso fazer bizarrices como passar numericos e textos no mesmo arguments
console.log(soma(" A", " B", " C")); //Posso concatenar textos tambem. Nesse caso o 0 aparecerá. 
