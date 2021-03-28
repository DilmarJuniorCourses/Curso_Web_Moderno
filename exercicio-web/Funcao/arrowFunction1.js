let dobro = function (a) 
{
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //Fazendo isso o return é implicito
console.log(dobro(Math.PI));

let ola = function ()
{
    return "Olá !";
}

ola = () => "Olá !"
ola = _ => "Olá !" //Possui parametro, só é outra forma de escrever
console.log(ola())

const triplo = b => 3 * b;
console.log(triplo(2));