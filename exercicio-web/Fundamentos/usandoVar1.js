//A linguagem JS também possui escopo. Mas variaveis var ficam visiveis no escopo global
//Variaveis Var tem escopo global e escopo de função.
{
    {
        {
            {
                var sera = "Sera ???";
                console.log(sera);
            }
        }
    }
}

console.log(sera); //Ela consegue imprimir sera mesmo sera estando fora do bloco de código

//O escopo da função é diferente, ele não deixa a variavel ir para o escopo global
function teste()
{
    var local = 1236;
    console.log(local);
}

teste(); //Só consegue imprimir porque o console .log esta dentro do escopo da função
console.log(local); //Da erro, ele não imprime. Nesse sentido local não existe