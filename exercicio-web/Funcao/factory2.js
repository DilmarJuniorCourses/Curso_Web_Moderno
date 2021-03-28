function criarProduto (nomeProduto, precoProduto)
{
    let PorcentDesconto = 0.10;

    return{
        nomeProduto,
        precoProduto,
        PorcentDesconto,
        precoFinalProduto: precoProduto - (precoProduto*PorcentDesconto)
    }
}

console.log(criarProduto("Bateria de Carro", 10))
console.log(criarProduto("Rodão maladeza", 40))
console.log(criarProduto("Pneu", 20))

