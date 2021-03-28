//Passando um obj para JSON
    //Criando um obj
        const obj = {a: 1, b: 2, c: 3, soma () { return a+ b +c}}
        //Note que a função soma não foi passada para JSON, pois JSON é um método textual e não executavel
        console.log(JSON.stringify(obj))

//Passando um JSON para obj
    //console.log(JSON.parse("{a: 1, b: 2, c: 3}")) - Isso não funciona
    //console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) - Isso não funciona

    console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //Todo JSON para objeto os atributos precisam estar dentro de aspas duplas
    console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}')) //Pode-se passar varios tipos de dados via JSON
