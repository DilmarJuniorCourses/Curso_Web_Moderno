//For of lida diretamente com os valores
for (let letra of "Dilmar"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//forIn lida com index
for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

//Para pegar o conteudo de assuntosMap posso usar assim
for(let assunto of assuntosMap){
    console.log(assunto)
}

//Ou assim com destructuring
for(let [chave, valor] of assuntosMap){
    console.log(chave, valor)
}

//Para pegar apenas as Keys
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//Para pegar somente os valores
for(let valor of assuntosMap.values()){
    console.log(valor)
}

//Para pegar tudo com entrie
for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}

