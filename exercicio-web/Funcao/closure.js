//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação !
const x = "Global";

//Funções em JS tem mémoria do lugar onde ela foi definida.
function fora()
{
    const x = "Local"
    function dentro()
    {
        return x; //Ele busca a atribuição mais próxima, o escopo mais próximo 
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());