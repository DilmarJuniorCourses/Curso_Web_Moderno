//global é um objeto que esta em todos os lugares de sua aplicação. É recomendavel que nunca mexa-mos nele
//console.log(global)
global.MinhaAPP = Object.freeze({
    saudacao(){
        return 'Boa noite ! Estou em todos os lugares'
},
    nome: 'Sistema'
})