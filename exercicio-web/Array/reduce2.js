const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio1: Todos os alunos são bolsistas ? 

const retornaBolsista = (resultado,bolsista) => resultado && bolsista //utilizando o && Faz com que retorne true so se todos os resultados forem verdadeiros
const TodosBolsista = alunos.map(al => al.bolsista).reduce(retornaBolsista)
console.log(TodosBolsista)

//Desafio2: Algum aluno é bolsista ?
const retornaAlgumBolsista = (resultado,bolsista) => resultado || bolsista //utilizando o || Faz com que retorne true se qualquer um dos resultados forem verdadeiros
const AlgumBolsista = alunos.map(al => al.bolsista).reduce(retornaAlgumBolsista)
console.log(AlgumBolsista)
