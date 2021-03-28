import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 600

function filterByCity(city) {
    $('[wm-city]').each(function (index, element) {
        const isTarget = $(this).attr('wm-city') === city 
        || city === null

        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set //Criando um Set porque no Set mesmo que eu passe 4 valores iguais ele pega 1 exemplo de cada. Não tem repetição
    $('[wm-city]').each(function (index, element) {
        cities.add($(element).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(event => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>').addClass(['btn', 'btn-info']).html('All')
    btnAll.click(event => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})