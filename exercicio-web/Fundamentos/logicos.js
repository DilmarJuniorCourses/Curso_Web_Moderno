function compras(trabalho1, trabalho2)
{
    //Nesse caso estou utilizando o operador lógico OU e ele precisa que apenas uma das sentenças seja verdadeira para que a operação seja verdadeira
    const comprarSorvete = trabalho1 || trabalho2;
    //Nesse caso estou utilizando o operador lógico E e ele precisa que as duas sentenças sejam verdadeiras para que a operação seja verdadeira
    const comprarTv50 = trabalho1 && trabalho2;

    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // btwise xor (jeito de usar ou exclusivo)

    const comprarTv32 = trabalho1 != trabalho2; //Jeito de usar ou exclusivo também de gambiarra, pois trabalho1 diferente de trabalho2
    const manterSaudavel = !comprarSorvete //Operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));