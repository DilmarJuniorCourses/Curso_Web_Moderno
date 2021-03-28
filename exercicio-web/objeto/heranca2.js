//Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //Não faça isso  em casa ! Isso adiciona um atributo no objeto.prototype oque altera ele globalmente

const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} //Para encadear um objeto utilizamos o __proto__: obj acima
const filho = {__proto__: pai, attr3: 'C', attr4: 'D'} //attr3 de filho sombreia o attr3 do pai

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //Quando ele não tem o atributo ele busca o atributo acima
console.log(pai.attr4) //como attr4 pertence ao objeto filho, o pai nao tem acesso.


//Criando exemplo mais complexo

const carro ={
    velAtual: 0,
    velMax: 200,
    acerelaMais(delta){
        //Caso a velocidade atual + o delta seja menor ou igal a velocidade maxima a velocidade atual se auto-incrementa com delta.
        //Fez isso para a velocidade nunca utrapassar a velocidade maxima
        if (this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else //Se não a velocidade atual permanece no máximo sempre
            this.velAtual = this.velMax
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

//Criando objetos filhos de carro

const ferrari ={
    modelo: 'V40',
    velMax: 324 // Nesse caso estou sombreando a velMax de carro com velMax de ferrari.
}

const volvo ={
    modelo: 'F40',
    status() {
        return `${this.modelo}: ${super.status()}` //Eu uso o super para referenciar um elemento do meu prororipe pai, ou seja, o status de carro e não de volvo
    }
}

Object.setPrototypeOf(ferrari, carro) //Setando carro como prorotype de ferrari
Object.setPrototypeOf(volvo, carro) //Setando carro como prorotype de volvo

//Quando imprimo o objeto ele aparece somente os atributos do objeto em si
console.log(ferrari)
console.log(volvo)

//Mas tenho acesso aos atributos de seu pai
volvo.acerelaMais(100)
console.log(volvo.status())

ferrari.acerelaMais(300)
console.log(ferrari.status())



