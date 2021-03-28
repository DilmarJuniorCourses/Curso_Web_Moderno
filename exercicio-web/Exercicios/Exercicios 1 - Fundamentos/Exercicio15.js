/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const modelosDeCarros = (modeloEscolhido) =>{

    let opcaoEscolhida = modeloEscolhido.toUpperCase()

    switch(opcaoEscolhida){
        case("HATCH"):
            return "Compra efetuada com sucesso"
            break
        case("SEDAN"):
        case("MOTOCICLETA"):
        case("CAMINHONETE"):
            return "Tem certeza que não prefere este modelo ?"
            break
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
            break
    }

}

console.log(modelosDeCarros("hatch"))
console.log(modelosDeCarros("sedan"))
console.log(modelosDeCarros("Motocicleta"))
console.log(modelosDeCarros("CaMiNhOnEtE"))
console.log(modelosDeCarros("PickUp"))



