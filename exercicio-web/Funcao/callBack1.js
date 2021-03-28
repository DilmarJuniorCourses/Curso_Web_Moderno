//Callback chama uma função de acordo com um evento que a dispara, ai ele chama a função de volta
//CallBack é uma função que sera executada assim que um evento à disparar.
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricantes => console.log(fabricantes)); //Nesse caso fabricantes é cada elemento do array

const modelos = ["Classe A", "Audi A4", "Serie3"]

//Criar uma função arrow para teste
let imprimir2 = (nome, indice) => console.log(`${indice + 1}. ${nome}`);
modelos.forEach(imprimir2);