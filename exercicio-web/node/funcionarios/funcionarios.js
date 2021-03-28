/*
-A principal função do package.json é manter uma lista detalhada dos modulos que seu projeto possui
-npm init habilita o modo wizard. Cria um arquivo package.json
-para criar um npm initi sem precisar de responder as perguntas  tendo sim como padrão voce coloca npm initi -y
- Para salvar a descrição de seus modulos no arquivo package.json nós utilizamos o comando no terminal : npm i --save "Modulo terceiro"
- ^Antes da versão no modulo permite ele a atualizar automaticamente a versão minor. ~Apenas a versão fixed
- Se tiver o arquivo Package-lock.json, ele sempre vai pegar a versão fixa do modulo, mesmo que voce coloque para atualizar. Da bastante detalhes do modulo
- axios é um client http


-Quando coloco npm i "Modulo de terceiro" ele instala o modulo na pasta node_modules na pasta onde eu estou

-Comando pwd no terminal da o caminhop absoluto da pasta onde você esta */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') //Axios é um client http que faz requisições para obeter informações de algo que está remoto

//Método get do axios
axios.get(url).then(response =>{
    const funcionarios = response.data // função que puxa e guarda em funcionarios o dado JSON da URL
    console.log(funcionarios)
}) 



