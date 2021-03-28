const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const retornaMulher = func => func.genero === 'F' //Criando função arrow retornaMulher que pega func como parametro e passa se true func.genero === 'F'
const retornaChines = func => func.pais === 'China' //Criando função arrow retornaMulher que pega func como parametro e passa se true func.pais === 'China'
const retornaMenorSalario = function(func, funcAtual ) // criando a função retornaMenorSalario com 2 parametros porque vou usar Reduce e o reduce pega 2 parametros (o acumulador e o valor atual) Pego o obj todo
    {    
    return func.salario < funcAtual.salario ? func:funcAtual //Estou fazendo a operação: se salario de funcionario ( func: acumulado ) < salario de funcionario atual (funcAtual: variavel) ele retorna funcionario acumulado, se não, retorna funcionario atual
    }

axios.get(URL).then( response =>{ //função get do axios crio uma função response que vai pegar os dados da URL e guardar em funcionarios
    const funcionarios = response.data

    //Adicionando os maps
    let mulherChinesaMenorSalario = funcionarios.filter(retornaMulher).filter(retornaChines).reduce(retornaMenorSalario) //Usar filter para filtrar as opções que coloquei. Map nao funciona
    console.log(mulherChinesaMenorSalario)
})


