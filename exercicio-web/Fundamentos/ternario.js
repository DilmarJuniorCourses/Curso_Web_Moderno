//Oque vem depois da ? é o valor que sera retornado se a operação relacional for verdadeira, depois dos : se ela for falsa
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(7.1));
console.log(resultado(6.9));
