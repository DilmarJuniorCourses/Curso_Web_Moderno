//Realizando maiss alguns testes com a estrutura if

function teste1 (num) 
{
    if(num > 7)
        console.log(num + " é maior que 7.");
    
    console.log("Final"); //Se eu não colocar chaves essa sentença não terá nada a ver com a estrutura if, pois ela so pega a primeira sentença após a operação relacional

}

teste1(6);
teste1(8);

function teste2(num)
{
    if (num > 7); //Cuidado ao utilizar ";", não utilizar em estruturas de controle
    { //Nesse caso esse bloco nao tem nada a ver com o if por conta do ";"
        console.log(num);
    }
}

teste2(6);
teste2(8);
