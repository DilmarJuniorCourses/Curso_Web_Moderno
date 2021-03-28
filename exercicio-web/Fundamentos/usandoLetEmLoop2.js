const funcs = [];

for(let i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i);
    })
}

//O Let  respeita o escopo do bloco, por isso imprime os valores diferentes.
funcs[2]();
funcs[6]();
funcs[8]();
