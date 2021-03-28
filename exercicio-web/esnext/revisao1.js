{
    var a = "A"
    let  b = "B"

    console.log(b)
}

console.log(a)

//Template string
const produto = 'Notebook'
console.log(`${produto} é caro`)

//Destructuring
const [l,e,t, ...ras] = 'Dilmar'
console.log(l, e, t, ras)

const [x, ,y] = [1, 2, 3]
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)