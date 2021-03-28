import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import QualquerCoisa, {BoaNoite} from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render (
    <div>
        <Pai nome="Jorge" sobrenome="Macedo">
            <Filho nome="Pedro" />
            <Filho nome="Estevão" />
            <Filho nome="Cristina" />
        </Pai>
    </div>
, document.getElementById('root'))