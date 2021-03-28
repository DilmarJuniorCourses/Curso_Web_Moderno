//Switchs são ferramentas de multipla seleção.

//Criando função imprimirResultados, note que o parenteses está a direita. Por isso não é um destructuring
const imprimirResultados = function (nota)
{
    //Sintaxe da estrutura Switch
    switch(Math.floor(nota)) //No switch nos passamos um valor, não uma operação booleana
    {
        case 10:
        case 9: //No JS podemos declarar assim para dizer que 2 cases teram o mesmo valor
            console.log("Quadro de Honra");
            break;  //voce deve utilizar o break para que por padrão, assim que ele executar esse case ele pule para o final e não execute todos abaixo dele
        case 8: case 7:
            console.log("Aprovado");
            break;
        case 6: case 5: case 4: //Também podemos declarar assim, na mesma linha
            console.log("Recuperação");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Reprovado"); 
            break
        default:
            console.log("Nota Inválida");
    }
}

imprimirResultados(10);
imprimirResultados(9);
imprimirResultados(8.9);
imprimirResultados(7.5);
imprimirResultados(6);
imprimirResultados(3);
imprimirResultados(2.9);
imprimirResultados(11);
imprimirResultados(-9);







