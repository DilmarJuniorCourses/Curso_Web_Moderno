const sequence ={
    _id: 1,
    get id() { return this._id++}
}

const listaProdutos = {}

function salvarProduto(produto){
    if(!produto.id)
        produto.id = sequence.id
    listaProdutos[produto.id] = produto
    return produto
}

function getProduto(id){
    return listaProdutos[id] || {}
}

function getListaProdutos(){
    return Object.values(listaProdutos)
}

function excluiProduto(id){
    const produto = listaProdutos[id]
    delete listaProdutos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getListaProdutos, excluiProduto}