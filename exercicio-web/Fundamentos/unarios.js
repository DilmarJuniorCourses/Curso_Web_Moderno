let num1 = 1;
let num2 = 2;

//Acrescenta +1 somando a variavel,  como se fosse num1 = num1 + 1
num1++
console.log(num1);

//Dcrescenta -1 subtraindo a variavel,  como se fosse num1 = num1 - 1
--num1 //Colocar o operador pré-fixado faz com que ele seja mais prevalente do que o pós-fixado
console.log(num1);

//Nesse caso a operação de acrescimo como é pre-fixada tem maior prevalencia e será executada primeiro do que a comparação e o decrescimo
console.log(++num1 === num2--);
console.log(num1 === num2);
