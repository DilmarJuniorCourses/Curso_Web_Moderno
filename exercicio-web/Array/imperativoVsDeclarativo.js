const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Ariel', nota: 3.9},
]

//Imperativo - Codigo imperativo é aquele que geralmente possui pouco reuso, e voce esta mais preocupado em como fazer tal tarefa. Geralmente ele requer mais codigo
let total1 = 0
for(let i = 0; i < alunos.length; i++)
        total1 += alunos[i].nota

console.log(total1/alunos.length)

//Declarativo - Codigo com mais reuso, mais simples, voce fica masi preocupado com oque fazer
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)