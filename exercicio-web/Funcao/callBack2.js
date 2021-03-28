const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem utilizar CallBack

let notasBaixas1 = [];

for(let i in notas)
{
    if(notas[i] < 7 )
    {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

//Utilizando CallBack
notasBaixas2 = notas.filter(function(nota)
{
    return nota < 7
})

console.log(notasBaixas2)

//Utilizando CallBack com Arrow function

const notasBaixas3 = notas.filter(nota1 => nota1 < 7);
console.log(notasBaixas3)

//Outra forma de utilizar CallBack com Arrow function

const notasMenoresQue7 = nota2 => nota2 < 7;
const notasBaixas4 =notas.filter(notasMenoresQue7);
console.log(notasBaixas4);