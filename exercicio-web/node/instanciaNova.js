//Usando uma função factory para instanciar multiplos valores
//Factory retorna uma nova instancia, ou seja, um novo objeto sempre que é chamada
module.exports =() => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}