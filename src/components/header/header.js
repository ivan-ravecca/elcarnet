import React from 'react';
import { Link } from "react-router-dom";


export default class Header extends React.Component {
    render() {
        return <header id="header">
            <Link to="/" className="logo" alt="Inicio" title="Inicio"><strong>El Carnet Plástico</strong></Link>

            <ul className="icons">
                <li>
                    <Link to="#" className="icon fa-facebook" alt="Síguenos en Facebook" title="Síguenos en Facebook"><span className="label">Facebook</span></Link>
                </li>
            </ul>
        </header>;
    }
}