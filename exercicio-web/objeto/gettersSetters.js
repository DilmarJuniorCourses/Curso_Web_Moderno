const sequencia = {
    _valor: 1, //Convenção: Quando eu faço isso, por convenção esse atributo so pode ser acessado internamente, utilizando get e set
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor //Estou settando o atributo _valor aqui
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)