import React from 'react';

class Landing extends React.Component {
    render() {
        return <section id="banner">
            <div className="content">
                <header>
                    <p>Bienvenidos a El Carnet Plástico</p>
                </header>
                <p>Aquí usted encontrará...</p>
                <p>
                Papelería: Agendas, Carpetas, Bolígrafos, Engrampadoras, Redondeadoras, Encuadernadoras, Guillotinas.
Plastificados: Plastificados, Laminados, Insumos, Pouches para plastificar (todos los tamańos, desde 90x50mm. hasta doble carta), Máquinas plastificadoras.
Sellos: Sellos de goma comúnes, Autoentintables, Fechadores, Numeradores, Sello-Bolígrafo, Pocket Stamp, Lacres y Sellos Metáclicos.
Grabados: En Bronce, Metalex, Acrílico, Madera, Vidrio, Acero, Cuero, Aluminio.
Artículos de P.V.C.: Solaperos, fundas, sobres, Carpetas - todas las formas y modelos.
Imprenta: Tarjetas, Sobres, Facturas, Encuadernaciones, Impresiones.
                </p>
            </div>
            <span className="image object">
                <img src="images/local_2000.jpg" alt="" />
            </span>
        </section>;
    }
}
export default Landing;