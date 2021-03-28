(function($){
    $.fn.temporizador = function(opcoes){

        const opcoesFinais = $.extend({ //Extend é um valor padrão setado para opcoes. Se caso não passarmos nada para opções ou faltar algum item, ele sera passado por extend
            mensagem: 'Em breve !',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
        
        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto,
                        segundoDezena, segundoUnidade, mensagem)
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) //Captura os elementos que tiverem essa configuração. Os parenteses são grupos de captura
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        // console.log(horarioAlvo)

        const temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()

            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if(diferencaEmMili >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }else {
                clearInterval(temporizador)
                $(this).hide(3000)
            }
        },1000)

        return this
    }
})(jQuery)