const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag]: this.padrao
    }
}


document.querySelectorAll('.tag').forEach(elemento => { //Pegando todos os elementos que possuem a class .tag, pegando como param o elemento inteiro
    const tagName = elemento.tagName.toLowerCase() //Com o .tagName ele pega o nome da tag do elemento. Estamos usando lowerCase para transformar todas em minsculas

    elemento.style.borderColor = colors.get(tagName) //aplicando uma cor de borda padrão

    if(!elemento.classList.contains('nolabel')){ //Caso na lista de classes de elemento NÃO possua a classe nolabel
        const label = document.createElement('label') //Ele criará a um elemento label

        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName //Ele inseriu a tag de elemento dentro da tag label
        elemento.insertBefore(label, elemento.childNodes[0]) //Ao final ele insere label antes da tag original de elemento
    }
})