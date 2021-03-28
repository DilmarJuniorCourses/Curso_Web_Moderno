//Break e continue são ferramentas de desvio de fluxo (Evitar usa-las)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums )
{
    if(x == 5)
        {
            break //Age mais no for e no while
        }

    console.log(`Índice: ${x} = ${nums[x]}`);
}

for (let y in nums) 
{
    if(y == 5)
    {
        continue //Age mais em if e afins.
    }
    console.log(`Índice: ${y} = ${nums[y]}`);
}

//Nunca usar, evitar ao maximo.
externo: for (a in nums){ //Rotula o for para que o break aja no for rotulado.
    for (b in nums)
    {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}