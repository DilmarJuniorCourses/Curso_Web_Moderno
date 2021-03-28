function rand([min = 0, max = 1000])
{
                //Destructuring
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//No caso do array não preciso explicitar qual valor assumira o elemento, eu posso apenas passar os valores
console.log(rand([50,40]));

//Posso passar apenas um que nesse caso assumira o valor de min
console.log(rand([992]));

//Posso também passar apenas o segundo valorq ue assumirá o valor de max
console.log(rand([, 10]));

//Posso não passar nenhum e ele assumira os valores padrões
console.log(rand([]));

//No entanto se eu não passar nada ele bugará porque será undefined
//console.log(rand());
