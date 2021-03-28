//Função em JS é First-Class Object (Citizens)
//Higher-Order function
//Ou seja, em JS voce pode tratar uma função como um dado

//Criar uma função de forma literal
function fun1()/*Parametros Função*/ {} //Corpo da Função

//Armazenar uma função em uma variavel
const fun2 = function() {}

//Armazenar em um Array
const Array = [function (a,b) {return a + b}, fun1, fun2]
console.log(Array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return "Opa";}
console.log(obj.falar());

//Passar uma função como parametro para outra função
function run(fun){
    fun()
}

run(function () { console.log("Executando...")});

//Uma Função pode contrar outras funções

function soma(a, b)
{
    return function(c)
    {
        console.log(a + b + c );       
    }
}

soma(2,3)(4);
const CincoMais = soma(2,3);
CincoMais(4);