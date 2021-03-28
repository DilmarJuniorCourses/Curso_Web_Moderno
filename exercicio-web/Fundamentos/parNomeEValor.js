// Par nome/valor ou chave/valor ou id/valor
//Contexto Léxico é o contexto fisico onde a variavel ou constante está armazenada

const saudacao = "Opa"; //Contexto Léxico 1

function exec()
{
    const saudacao ="Faaaala"; //Contexto Léxico 2
    return saudacao;    
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito Legal",
        numero: 1234
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);