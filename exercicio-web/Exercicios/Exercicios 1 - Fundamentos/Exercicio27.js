/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const calculaCrescimento = (altura1,altura2) =>{
  
    let crescimento1 = altura1[0]
    let crescimento2 = altura2[0]
    let guardaAno

     for(let i = 1; i <=10; i++){
         crescimento1 = crescimento1 + (crescimento1*(altura1[1]/100))
         crescimento2 = crescimento2 + (crescimento2*(altura2[1]/100))
         guardaAno = i

         if (crescimento1 > crescimento2) {
              return "No ano "+guardaAno+"Criança 01: "+crescimento1+"cm \nCriança02: "+crescimento2+"cm \nCriança 01 é mais alta"
         }
         else if (crescimento1 < crescimento2) {
            return "No ano "+guardaAno+" Criança 01: "+crescimento1+"cm \nCriança02: "+crescimento2+"cm \nCriança 02 é mais alta"
        }
         

     }

}

const crianca1 = [90, 10]
const crianca2 = [70,15]

console.log(calculaCrescimento(crianca1,crianca2))