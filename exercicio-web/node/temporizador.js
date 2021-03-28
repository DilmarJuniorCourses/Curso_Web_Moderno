const { functionsIn } = require('lodash')
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function(){ //*Milisegundo*Segundo(de 5 em 5 segundos)*Minuto*Hora*Dia do mes*mes* dia da semana (0 - domingo ... 6 - sabado)
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 

//Temporizadores padrões do JS
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelamento da Tarefa 1', new Date().getSeconds())
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa2 !', new Date().getSeconds())
})