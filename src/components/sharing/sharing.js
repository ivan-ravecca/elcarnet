import React from 'react';
import { Link } from "react-router-dom";


class Sharing extends React.Component {
    render() {
        return <div id="sharing">
            <ul className="icons">
            <li>
                    <Link to="#" className="icon fa-twitter" title="Compartir en Twitter" alt="Compartir en Twitter">
                        <span className="label">Compartir en Twitter</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-facebook" title="Compartir en Facebook" alt="Compartir en Facebook">
                        <span className="label">Compartir en Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-instagram" title="Compartir en Instagram" alt="Compartir en Instagram">
                        <span className="label">Compartir en Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-share-alt" title="Compartir por email" alt="Compartir por email">
                        <span className="label">Compartir por email</span>
                    </Link>
                </li>
                <li> - </li>
                <li>
                    <Link to="#" className="icon fa-envelope" title="Consultar por éste artículo" alt="Consultar por éste artículo">
                    <span className="label">Consultar por éste artículo</span>
                    </Link>
                </li>
            </ul>
        </div>;
    }
}

export default Sharing;