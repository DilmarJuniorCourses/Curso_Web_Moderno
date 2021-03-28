/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const calculaMedia = (codigoAluno,notaAluno1, notaAluno2, notaAluno3) =>{

    let mediaAluno, retorno
        if ((notaAluno1 > notaAluno2) && (notaAluno1 > notaAluno3)){

            mediaAluno = ((notaAluno1*4) + (notaAluno2*3) + (notaAluno3*3))/3
                if (mediaAluno >=5) {
                    retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                    " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está aprovado(a) !!"
                    
                    return retorno 
                }
                else
                retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está reprovado(a) :("
                
                return retorno 
        }
        else if ((notaAluno2 > notaAluno1) && (notaAluno2 > notaAluno3)){

            mediaAluno = ((notaAluno2*4) + (notaAluno1*3) + (notaAluno3*3))/3
                if (mediaAluno >=5) {
                    retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                    " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está aprovado(a) !!"
                    
                    return retorno 
                }
                else
                retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está reprovado(a) :("
                
                return retorno 
        }
        else if ((notaAluno3 > notaAluno1) && (notaAluno3 > notaAluno2)) {
            
            mediaAluno = ((notaAluno3*4) + (notaAluno2*3) + (notaAluno1*3))/3

                if (mediaAluno >=5) {
                    retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                    " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está aprovado(a) !!"
                    
                    return retorno 
                }
                else
                retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está reprovado(a) :("
                
                return retorno 
        }

        else
                mediaAluno = ((notaAluno1*3) + (notaAluno2*3) + (notaAluno3*3))/3
                if (mediaAluno >=5) {
                    retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                    " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está aprovado(a) !!"
                    
                    return retorno 
                }
                else
                retorno = "Codigo aluno(a): "+codigoAluno +" - Nota 1: "+notaAluno1+" - Nota 2: "+notaAluno2+
                " - Nota 3: "+notaAluno3+" Média calculada: "+mediaAluno.toFixed(2)+" O(A) aluno(a) está reprovado(a) :("
                
                return retorno 
}


let codAluno
let notaAluno1, notaAluno2, notaAluno3
codAluno = 1
while(codAluno > 0){

    notaAluno1 = 10
    notaAluno2 = 9
    notaAluno3 = 8
    console.log(calculaMedia(codAluno,notaAluno1,notaAluno2,notaAluno3))

    codAluno = 2
    notaAluno1 = 9
    notaAluno2 = 10
    notaAluno3 = 8
    console.log(calculaMedia(codAluno,notaAluno1,notaAluno2,notaAluno3))

    codAluno = 3
    notaAluno1 = 8
    notaAluno2 = 9
    notaAluno3 = 10
    console.log(calculaMedia(codAluno,notaAluno1,notaAluno2,notaAluno3))

    codAluno = 4
    notaAluno1 = 1
    notaAluno2 = 1
    notaAluno3 = 1
    console.log(calculaMedia(codAluno,notaAluno1,notaAluno2,notaAluno3))

    codAluno = -5

}
