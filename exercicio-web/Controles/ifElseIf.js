//utilizar if Else If para realizar varias sentenças

Number.prototype.entre = function (inicio, fim)
{
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota)
{
    if (nota.entre(9, 10))
        console.log("Você tirou a nota: "+nota+" e etá no Quadro de Honra");
    else if (nota.entre(7, 8.99))
        console.log("Você tirou a nota: "+nota+" e está Aprovado");
    else if (nota.entre(4, 6.99))
        console.log("Você tirou a nota: "+nota+" e está de Recuperação");
    else if (nota.entre(0, 3.99))
        console.log("Você tirou a nota: "+nota+" e está Reprovado");
    else 
        console.log("Nota invalida")

}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.2);
imprimirResultado(-1);
imprimirResultado(11);





