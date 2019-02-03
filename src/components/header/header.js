import React from 'react';
import { Link } from "react-router-dom";


export default class Header extends React.Component {
    render() {
        return <header id="header">
            <Link to="/" className="logo" alt="Inicio" title="Inicio">
                <img src="/images/logo.png" alt="Logo El Carnet Plástico" />
            </Link>

            <ul className="icons">
                <li>
                    <a href="https://www.facebook.com/elcarnetplastico/" className="icon fa-facebook" alt="Síguenos en Facebook" title="Síguenos en Facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a>
                </li>
                { (false) ? <li ><Link to="#" className="icon fa-instagram" alt="Síguenos en Instagram" title="Síguenos en Instagram"><span className="label">Instagram</span></Link> </li> : '' }
            </ul>
        </header>;
    }
}