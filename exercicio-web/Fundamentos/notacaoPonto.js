//Se usa a notação ponto para acessar elementos que estejam dentro das funções
console.log(Math.ceil(6.1));

//Criando o obj1
const obj1 = {}

//Acrescentando dinamicamente a obj1
obj1.nome = "Bola";
// obj1["nome"] = "Bola2" - Fazeno isso eu posso adicionar strings a Obj dinamicamente
console.log(obj1.nome);

//Usando o This eu atribuo um parametro para a variavel this fazendo com que ela fique publica
function Obj(nome){
    this.nome = nome;

    //Também posso colocar uma função dentro da função utilizando o This.
    this.exec = function(){
        console.log("Exec...")
    }
}

//Instanciando os objetos
const obj2 = new Obj ("Cadeira");
const obj3 = new Obj ("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()

