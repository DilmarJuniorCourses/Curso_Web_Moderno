/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const defineBissexto = (Ano) =>{
    if((Ano%400) == 0)
        return true
    else if((Ano%100) == 0)
        return false
    else if((Ano%4) == 0)
        return true
}

console.log(defineBissexto(2020))
console.log(defineBissexto(1900))
console.log(defineBissexto(2000))
console.log(defineBissexto(1800))
console.log(defineBissexto(40))



