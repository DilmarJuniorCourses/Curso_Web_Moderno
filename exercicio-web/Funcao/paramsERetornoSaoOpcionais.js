function area(largura, altura)
{
    const area = largura*altura
    if (area > 20)
        console.log(`Valor acima do permitido: ${area}m².`);
    else
        return area;
}

console.log(area(2, 2));
console.log(area(2)); //Em JS posso passar apenas um parametro. Nesse caso o segundo será Undefined
console.log(area()); //Posso também não passar nenhum, os dois seram Undefined nesse caso.
console.log(area(2,3,4,15,29,87)) //Posso passar também mais parametros do que o necessario. Nesse caso ele pega os dois primeiros e ignora o resto
console.log(area(5, 5));


