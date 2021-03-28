import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/nasa-logo-web-rgb.png'
import {Link} from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="Logo Site"/>
        </Link>
    </aside>
