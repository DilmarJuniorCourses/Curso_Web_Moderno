//Criando a função falarDepoisDe que irá simular uma situação assincrona
function falarDepoisDe(segundo, frase) { //Passando como parametro os segundos que demoraram e a frase de retorno
    return new Promise((resolve, reject) => { // Essa função retorna uma promise(Promessa), que pega como parametro e retorna o resolve e reject
        setTimeOut(() => { //Dentro do TimeOut crio uma função callback que retorna o resolve
            resolve(frase)
        }, segundo*1000)
    })
}

falarDepoisDe(3, 'Que legal !!')
    .then(frase => frase.concat('!?!')) //Resolve chama a função then, passando o resultado da promessa do resolve vai ser passado como param em then
    .then(outraFrase => console.log(outraFrase)) //Posso encadear varios thens pegando como parametro os resultados dos outros thens 
    .catch(e => console.log(e)) //No caso do reject as funções sao tratadas pelo catch