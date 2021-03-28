//Podemos utilizar valores padrões para evitar bugs em nossas aplicações

//Estrategia n° 1 para gerar valores padrão (Estrategia Ou). Essa estrategia ainda hoje é muito utilizada:
function soma1(a, b, c)
{
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0,0,0)) //essa forma é legal. Porém pode gerar alguns bugs quando por exemplo vamos passar 0 como parametros de soma

//Estrategia 2, 3, 4 para gerar valores padrão
function soma2(a, b, c)
{
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //Essa forma é a mais confiavel
    return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0,0,0)) 

//Valor Padrão do ES2015 - Padrão novo, melhor utilizar ele
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0,0,0)) //Essa forma é melhor
