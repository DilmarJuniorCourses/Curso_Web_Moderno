const escola = [
    {nome: 'Turma M1', alunos:[{nome: 'Gustavo', nota: 8.1}, {nome: 'Ana', nota: 9.3}]},
    {nome: 'Turma M2', alunos:[{nome: 'Rebeca', nota: 8.9}, {nome: 'Roberto', nota: 7.3}]}
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const Nota1 = escola.map(getNotasDaTurma)
console.log(Nota1)

//Resultado que eu quero: 
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

//Implementando flatMap:
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const Nota2 = escola.flatMap(getNotasDaTurma)
console.log(Nota2)