import React from 'react';
import ReactGA from 'react-ga';

class About extends React.Component {
    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        document.title = 'El Carnet Plástico - La Empresa';
    }

    render() {
        return <section>
            <header className="major">
                <h2>Sobre nosotros</h2>
            </header>
                <h3>Fundada en 1946 en el mismo local en el que hoy en día está situada.</h3>
                <span className="image fit"><img src="images/elcarnet_1970.jpg" alt="" /></span>

                <p>
                    <span className="image right"><img src="images/local_1997.jpg" alt="" /></span>
                    En sus inicios se dedicaba a realizar plastificados, servicios de imprenta y venta de artículos de oficina.
Actualmente nos dedicamos también, a la realización de sellos de goma, grabados, creación de solaperos y fundas en P.V.C.
Ofrecemos variedad en artículos para oficinas como por ejemplo, guillotinas, encuadernadoras, redondeadoras, plastificadoras, perforadoras, engrampadoras.
                </p>
                <p>
                    <span className="image left"><img src="images/local_2000.jpg" alt="" /></span>
                    Nuestros talleres se encuentran en nuestro mismo local, para brindar una rápida respuesta a sus solicitudes, brindandole calidad y servicio al menor costo.
Nuestra meta es brindarle el mejor servicio y la mayor calidad, estamos en la constante búsqueda de nuevas soluciones para estos nuevos tiempos, donde la eficacia y la calidad del servicio marca la diferencia.
Nos adaptamos a las nuevas exigencias sin afectar el costo ni la calidad de nuestros productos.
                </p>
        </section>;
    }
}

export default About;