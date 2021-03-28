//Função construtora se equivale em vários sentido a classe em linguagens OO
function Carro(velocidadeMaxima = 200, delta = 5)
{
    //Atributo privado
    let velocidadeAtual = 0 //criando um atributo privado na função construtora

    //Método Publico
    this.acelerar = function()
    {
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta;
        else
            velocidadeAtual = velocidadeMaxima;
    }

    //Outro método publico
    this.getVelocidadeAtual = () => velocidadeAtual;
}

const uno = new Carro; //Instanciando e declarando o Objeto uno
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());


