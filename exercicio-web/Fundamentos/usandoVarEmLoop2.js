const funcs = [];

for(var i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i);
    })
}

//O var não respeita o escopo do bloco, por isso imprime o mesmo valor.
funcs[2]();
funcs[8]();
