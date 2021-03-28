//Estrutura IF é utilizada para controlar uma ação. Se tal valor ou expressão representa tal resultado ele realiza tal ação
function soBoaNoticia(nota)
{
    if(nota >= 7){
        console.log("Aprovado com "+nota+" pontos.");
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.9);

//Podemos também utilizar um if sem operação relacional

function seForVerdadeEuFalo(valor)
{
    if(valor)
    {
        console.log("É verdade... "+valor);
    }

}

//Valores negativos ( como visto na aula de boolean)
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0); //É o unico número que da negativo

//Positivos
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});










