//Por padrão o node faz Cache, ou seja, instancia SingleTon

module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}