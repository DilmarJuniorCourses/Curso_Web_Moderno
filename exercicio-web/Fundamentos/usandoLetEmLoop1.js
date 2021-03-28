//Como i é uma variavel tipo Le o escopo dela não existe globalmente, então ela existe apenas no bloco de repetição
for(let i = 0; i < 10; i++)
{
    console.log(i);
}

//Nesse caso i será indefinidomdará erro
console.log("i = ", i);

