const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços

const retornaPreco = e => `R$ ${parseFloat(JSON.parse(e).preco).toFixed(2).replace(".", ",")}`

const precos = carrinho.map(retornaPreco)

console.log(precos)