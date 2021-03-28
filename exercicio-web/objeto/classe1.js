//Criando Classe

class Lancamento {
    //Função construtora para criar meus atributos e atribuilos
    constructor(nome = 'Genérico', valor = 0){
            this.nome = nome
            this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //Criando vetor de lançamentos
    }
    //Criando métodos da classe

    addLancamentos(...lancamentos) { // Usando operador spread rest para pegar mais de um parametro
        lancamentos.forEach( l => this.lancamentos.push(l)) //forEach percorre o Array de forma continua
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado = valorConsolidado + l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())
