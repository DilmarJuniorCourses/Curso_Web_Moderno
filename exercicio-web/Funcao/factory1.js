//Função factory é uma função que retorna um objeto, ou seja, uma função que fabrica um objeto.

function criarPessoa()
{
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa());