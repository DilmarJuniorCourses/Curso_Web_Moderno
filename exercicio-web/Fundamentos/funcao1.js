//Função são métodos que chamamos para realizar ações em bloco de código

//Função sem retorno (Procedimento)
function imprimirSoma(a,b) //Criando a função imprimiSoma (Pegando a e b como parametros)
{
    console.log(a + b);
}
//Imprimindo a função sem retorno.
//Nesse caso, para imprimi-la posso apenas chama-la, pois ela imprime dentro dela

imprimirSoma(2,3); //Passando 2 e 3 por parametro
imprimirSoma(2); //Em JS posso passar apenas um, o segundo sera undefined se eu nao tiver-lo padronizado
imprimirSoma(2,10,4,5,6,7,8); //Posso colocar mais de 2 parametros, mas ele só pega os 2 primeiros
imprimirSoma(); //Quando não passo parametro nenhum ele retorna undefined

//Função com Retorno
function soma(a, b = 1) //Colocando o b = 1 eu padronizo o B, logo se não passar parametro ele deduz que b = 1
{
    return a + b;   
}

//Nesse caso, preciso imprimi-la com console.log, pois ela retorna um valor e não uma impressão
console.log(soma(2, 3));
console.log(soma(2)); //Nesse caso ele pegara o 1 que padronizei no B
console.log(soma()); //Nesse caso ele dará undefined porque o a não está padronizado
