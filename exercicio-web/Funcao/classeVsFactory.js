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

//No caso de utilizar uma arrow function factory ela tem ciencia do seu contexto lexico, voce não precisa usar o this. Escopo mais abrangente. Bem mais deterministico
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = criarPessoa("João")
p2.falar();