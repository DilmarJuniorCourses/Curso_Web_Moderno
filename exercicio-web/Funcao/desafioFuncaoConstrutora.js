class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é:  ${this.nome}`)
    }
}

const p1 = new Pessoa("João");
p1.falar();

//Criei a função passando o parametro nome
function Pessoa1(nome){
    this.nome = nome //Construtor


    //Método para realizar a impressão do resultado
    this.falar = function (){
        console.log(`Meu nome é: ${this.nome}`);
    }
}

const p2 =new Pessoa1("João")
p2.falar();
 