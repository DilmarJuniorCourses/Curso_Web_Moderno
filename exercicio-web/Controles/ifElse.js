//Estrutura de controle If e else serve para se uma sentença não for verdadeira ele executa outra

const imprimirResultado = function(nota)
{
    if(nota >= 7)
        console.log("Aprovado");
    else
        console.log("Reprovado");
}

imprimirResultado(10);
imprimirResultado(6);
imprimirResultado("Epa !!"); /*Em outra linguagem isso daria erro e o certo é dar erro
                               Porém, como Js é uma linguagem fracamente tipada ele passa esse erro,
                               resultando uma sentença falsa*/
                            
