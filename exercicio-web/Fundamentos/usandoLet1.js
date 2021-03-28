//Varaiveis Let tem o escopo global, o escopo de função e o escopo de bloco
let numero = 1;

//No caso de let ela respeita os scopos entao ele prioriza o scopo menor
{
    let numero = 2;

    //Caso não consiga ele pega o escopo mais abrangente, como nesse caso existe um numero dentro do escopo ele imprimira ele pois ele está mais perto
    console.log("Let Dentro = ", numero);
}

//Aqui ele usará o escopo mais abrangente
console.log("Let Fora = ", numero);
