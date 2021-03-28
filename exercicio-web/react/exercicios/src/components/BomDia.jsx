import React from 'react'


export default function(props) {
    return [
    <h1 key="h1">Bom dia {props.nome} !</h1>,
    <h2 key="h2">{props.nome} possui {props.idade} anos.</h2>,
    <p key="paragrafo">Até logo</p>
]}


//Utilizando div (Acaba redenrizando uma div):
// export default props => 
// <div>
//     <h1>Bom dia {props.nome} !</h1>
//     <h2>{props.nome} possui {props.idade} anos.</h2>
//     <p>Até logo</p>
// </div>


//Se você não quiser que seja redenrizado a div
// export default props => 
// <React.Fragment>
//     <h1>Bom dia {props.nome} !</h1>
//     <h2>{props.nome} possui {props.idade} anos.</h2>
//     <p>Até logo</p>
// </React.Fragment>

// import {Fragment} from 'react'
// export default props => 
// <Fragment>
//     <h1>Bom dia {props.nome} !</h1>
//     <h2>{props.nome} possui {props.idade} anos.</h2>
//     <p>Até logo</p>
// </Fragment>
