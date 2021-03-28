var numero = 1;
{
    var numero = 2;
    console.log("Var dentro = " + numero);
}
//Como se tratando de var ele só possui dois escopos, o global e o function, o valor de numero sera sobreescrito
console.log("Var fora = " + numero);

