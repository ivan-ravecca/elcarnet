import React from 'react';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

class Landing extends React.Component {
    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        document.title = 'El Carnet Plástico - Sellos, Grabados, Solaperos, Plastificados, Fotos';
    }
    render() {
        return <section id="banner">
            <div className="content">
                <header>
                    <h1>Bienvenidos a <br />El Carnet Plástico</h1>
                </header>
                <h2>Aquí usted encontrará...</h2>
                    <ul>
                        <li>
                            <h3>
                                <Link to="/categoria/oficina" alt="Papelería" title="Papelería" >Papelería</Link>
                            </h3>Agendas, Carpetas, Bolígrafos, Engrampadoras, 
                            &nbsp;<Link to="/categoria/oficina/producto/maquina-redondeadora-y-perforadora" alt="Redondeadoras" title="Redondeadoras" >Redondeadoras</Link>, Encuadernadoras, Guillotinas.
                        </li><li>
                            <h3>
                                <Link to="/categoria/laminados" alt="Plastificados" title="Plastificados" >Plastificados</Link>
                            </h3>Laminados, Insumos, 
                            &nbsp;<Link to="/categoria/oficina/producto/pouches-para-plastificar-carnes" alt="Pouches para plastificar (todos los tamańos, desde 90x50mm. hasta doble carta)" title="Pouches para plastificar (todos los tamańos, desde 90x50mm. hasta doble carta)" >Pouches para plastificar (todos los tamańos, desde 90x50mm. hasta doble carta)</Link>, 
                            &nbsp;<Link to="/categoria/oficina/producto/maquina-de-plastificar-para-oficina" alt="Máquinas plastificadoras." title="Máquinas plastificadoras." >Máquinas plastificadoras.</Link>
                        </li><li>    
                            <h3>
                                <Link to="/categoria/sellos-automaticos-trodat" alt="Sellos de Goma" title="Sellos de Goma" >Sellos de Goma</Link>
                            </h3>Sellos de goma comúnes, Autoentintables, 
                            &nbsp;<Link to="/categoria/fechadores-automaticos-trodat" alt="Fechadores" title="Fechadores" >Fechadores</Link>, Numeradores,
                            &nbsp;<Link to="/categoria/sello-de-goma-boligrafo" alt="Sello-Bolígrafo" title="Sello-Bolígrafo" >Sello-Bolígrafo</Link>, Pocket Stamp, 
                            &nbsp;<Link to="/categoria/sellos-metalicos" alt="PapeleSellos tipo lacres y Sellos Metáclicosría" title="PapeleSellos tipo lacres y Sellos Metáclicosría" >Sellos tipo lacres y Sellos Metáclicos</Link>.
                        </li><li>
                            <h3>
                                <Link to="/categoria/grabados-en-metalex" alt="Grabados en láser" title="Grabados en láser" >Grabados en láser</Link>
                            </h3>
                            <Link to="/categoria/grabados-en-bronce" alt="En Bronce" title="En Bronce" >En Bronce</Link>, 
                            &nbsp;<Link to="/categoria/grabados-en-metalex" alt="Metalex" title="Metalex" >Metalex</Link>,
                            &nbsp;<Link to="/categoria/grabados-en-acrilico" alt="Acrílico" title="Acrílico" >Acrílico</Link>,
                            &nbsp;<Link to="/categoria/grabados-en-madera" alt="Madera" title="Madera" >Madera</Link>, Vidrio, Acero,
                            &nbsp;<Link to="/categoria/grabados-en-cuero" alt="Cuero" title="Cuero" >Cuero</Link>, Aluminio.
                            &nbsp;<Link to="/categoria/fotograbado" alt="Fotograbado" title="Fotograbado" >Fotograbado</Link>.
                            &nbsp;<Link to="/categoria/chapas-de-bronce-profesionales" alt="Chapas de bronce profesionales" title="Chapas de bronce profesionales" >Chapas de bronce profesionales</Link>.
                        </li><li>
                            <h3>
                                <Link to="/categoria/solaperos-en-pvc" alt="Artículos de P.V.C." title="Artículos de P.V.C." >Artículos de P.V.C.</Link>
                            </h3>
                            &nbsp;<Link to="/categoria/solaperos" alt="Solaperos" title="Solaperos" >Solaperos</Link>, 
                            &nbsp;<Link to="/categoria/fundas-en-pvc" alt="fundas en PVC" title="fundas en PVC" >Fundas en PVC</Link>, 
                            &nbsp;<Link to="/categoria/sobres-en-pvc" alt="Sobres en PVC" title="Sobres en PVC" >Sobres en PVC</Link>, 
                            &nbsp;<Link to="/categoria/carpetas-en-pvc" alt="Carpetas en PVC" title="Carpetas en PVC" >Carpetas en PVC</Link> - todas las formas y modelos.
                        </li><li>
                            <h3>
                                <Link to="/categoria/imprenta" alt="Imprenta" title="Imprenta" >Imprenta</Link>
                            </h3>Tarjetas, Sobres, Facturas, Encuadernaciones, Impresiones.
                        </li>
                    </ul>
            </div>
            <span className="image object">
                <img src="images/local_2000.jpg" alt="" />
            </span>
        </section>;
    }
}
export default Landing;