function funcionarOuNao (valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try{ //Ele tenta executar todo esse bloco, caso ocorra qualquer erro dentro dele ele chama o catch
            con.log(`Temp`)
            if(Math.random() < chanceDeErro)
                reject('Ocorreu um erro !')
            else
                resolve(valor)
        }catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esperado - ${err}`) //Ele pega o primeiro tratamento de erro caso haja erro
    )
    .then(() => console.log('Quase Fim !!'))
    .catch(err => console.log(`Erro: ${err}`)) //Após o Catch não existe mais nenhum valor para o then pegar, ai ele so pega novos
    .then(() => console.log('Fim !'))