//Amarrando o this que esta dentro de um contador no this pessoa utilizando bind
function Pessoa() {
    this.idade = 0;

    setInterval(function(){ //setInterval é um contador que dispara seu bloco, nesse caso uma função, de tempos em tempos
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000) //setInterval funciona em milisegundos, nesse caso estou pedindo para ele acionar a cada 1000 milisegundos ou 1s
}

new Pessoa //Instanciando Pessoa

//Ao mesmo tempo, tempos outra tecnica para amarrar o this, que seria o self (Ess tecnica é um jeito de burlar a amarração do this), é muito usada mas não é a mais recomendada
function Pessoa2() {
    this.idade = 0;

    const self = this
    setInterval(function(){ 
        self.idade++
        console.log(self.idade);
    }, 1000) 
}

new Pessoa2 //Instanciando Pessoa