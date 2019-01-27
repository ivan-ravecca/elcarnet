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
                    <Link to="#" className="icon fa-facebook" alt="Síguenos en Facebook" title="Síguenos en Facebook"><span className="label">Facebook</span></Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-instagram" alt="Síguenos en Instagram" title="Síguenos en Instagram"><span className="label">Instagram</span></Link>
                </li>
            </ul>
        </header>;
    }
}