/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

//Função Arrow classificaTriangulo:
const classificaTriangulo = (lado1, lado2, lado3) => 
{
    if((lado1 > (lado2 + lado3)) || (lado2 > (lado1 + lado3)) || (lado3 > (lado1 + lado2)))
       return "Esse triângulo NÃO EXISTE! :("
    else if(lado1 == lado2 == lado3) //No caso a igualdade funcioanr aqui, porém para negação nao.
       return "Esse é um triângulo EQUILÁTERO !"
    else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) //O certo é fazer uma operação que seja binaria
       return "Esse é um triângulo ESCALENO !"
    else
       return "Esse é um triângulo ISÓCELES ! "
}
console.log(classificaTriangulo(10,2,3))
console.log(classificaTriangulo(1,1,1))
console.log(classificaTriangulo(1,2,3))
console.log(classificaTriangulo(1,1,2))

