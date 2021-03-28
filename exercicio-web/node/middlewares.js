//middlewares pattern (Chain of responsibility) (Cadeia de responsabilidade) é um padrão de projeto que permite desacoplar passos

//Criando um passo da CoR, eu passo como parametro o contexto, que no caso, é o objeto que eu vou trabalhar e o next que é a chamada para o proximo passo
const passo1 = (ctx, next) =>{ 
    ctx.valor1 = "Passo 1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "Passo 2"
    next()
}

//Eu posso ou não passar o next, caso eu opte por não passar o next ele não chamará a procima função

const passo3 = ctx => ctx.valor3 = "Passo 3"

//Agora criarei a função que chamará/acoplará todos os passos
const exec = (ctx, ...middlewares) => { //Utilizando função rest (...FuncRest) ela possibilita que eu passe varias funções e objetos e os guarda em um array indexado

    const execPasso = indice => {
        //A linha abaixo tem um if implicito
        middlewares && indice < middlewares.length && //Essa linha testa se o array middlewares esta setado e se o indice pegado como parametro é menor que o array middleware, para não correr o risco de pegar um indice que esta fora do array
            //Pegando uma função guardada no array middlewares utilizando o indice e passando ctx e o proprio execPasso como parametro
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
const ctx2 = {}
const ctx3 = {}
const ctx4 = {}


exec(ctx, passo1, passo2, passo3)
console.log(ctx)

exec(ctx2, passo2, passo1, passo3)
console.log(ctx2)

exec(ctx3, passo3, passo2, passo1)
console.log(ctx3)
