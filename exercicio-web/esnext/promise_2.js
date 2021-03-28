//Usando CallBack
setTimeout(function() {
    console.log('Executando CallBack... 1')

    setTimeout(function(){
        console.log('Executando CallBack... 2')

        setTimeout(function(){
            console.log('Executando CallBack... 3')
        }, 2000)
    }, 2000)
}, 2000)

//Usando promise
function esperaPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(`Executando promise...`)
            resolve()
        }, tempo)
    })
}

esperaPor()
    .then(() => esperaPor())
    .then(esperaPor)