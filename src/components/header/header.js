import React from 'react';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';


export default class Header extends React.Component {
    render() {
        return <header id="header">
            <Link to="/" className="logo" alt="Inicio" title="Inicio">
                <img src="/images/logo.png" alt="Logo El Carnet Plástico" />
            </Link>

            <ul className="icons">
                <li>
                    <ReactGA.OutboundLink
                        eventLabel="Síguenos en Facebook"
                        to="https://www.facebook.com/elcarnetplastico/"
                        target="_blank"
                        className="icon fa-facebook"
                        title="Síguenos en Facebook">
                        <span className="label" title="Síguenos en Facebook">Síguenos en Facebook</span>
                    </ReactGA.OutboundLink>
                </li>
                { (false) ? <li ><Link to="#" className="icon fa-instagram" alt="Síguenos en Instagram" title="Síguenos en Instagram"><span className="label">Instagram</span></Link> </li> : '' }
            </ul>
        </header>;
    }
}