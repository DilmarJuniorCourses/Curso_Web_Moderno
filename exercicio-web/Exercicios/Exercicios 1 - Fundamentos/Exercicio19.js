/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const pedidoCliente = (codPedido, quantPedido) =>{
    
    switch(codPedido){
        case 100:
            return codPedido + " - Cachorro-Quente (R$ 3,00): "+quantPedido+" / Total: R$ "+(3*quantPedido)
            break
        case 200:
            return codPedido + " - Hamburguer Simples (R$ 4,00): "+quantPedido+" / Total: R$ "+(4*quantPedido)
            break
        case 300:
            return codPedido + " - Cheesburguer (R$ 5,50): "+quantPedido+" / Total: R$ "+(5.5*quantPedido)
            break
        case 400:
            return codPedido + " - Bauru (R$ 7,50): "+quantPedido+" / Total: R$ "+(7.5*quantPedido)
            break
        case 500:
            return codPedido + " - Refrigerante (R$ 3,50): "+quantPedido+" / Total: R$ "+(3.5*quantPedido)
            break
        case 600:
            return codPedido + " - Suco (R$ 2,80): "+quantPedido+" / Total: R$ "+(2.8*quantPedido)
            break
        default:
            return "Produto não existe no cardapio :("
            break
    }
}

console.log(pedidoCliente(100,2))
console.log(pedidoCliente(200,3))
console.log(pedidoCliente(300,2))
console.log(pedidoCliente(400,2))
console.log(pedidoCliente(500,1))
console.log(pedidoCliente(600,2))




