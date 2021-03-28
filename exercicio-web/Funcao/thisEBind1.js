//O Bind fixa o this. para ele sempre apontar para o bloco onde ele está

const pessoa  = {
    saudacao: "Bom dia !!",
    falar() 
    {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); //Nesse caso fixamos o this para apontar sempre pro bloco pessoa
falarDePessoa();