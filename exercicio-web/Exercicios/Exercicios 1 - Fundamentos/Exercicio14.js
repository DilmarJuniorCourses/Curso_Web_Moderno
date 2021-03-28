/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const retornaFrutas = (frutaEscolhida) =>{

    let opcaofruta = frutaEscolhida.toUpperCase()

    switch(opcaofruta){
        case "MAÇA":
            return "Não vendemos esta fruta aqui"
            break
        case "KIWI":
            return "Estamos com escassez de Kiwis"
            break
        case "MELANCIA":
            return "Aqui está, são 3 reais o quilo"
            break
        default:
            return "Fruta invalida, tente novamente !"
            break
    }

}

console.log(retornaFrutas("melancia"))
console.log(retornaFrutas("kiwi"))
console.log(retornaFrutas("MaÇa"))
console.log(retornaFrutas("Banana"))


