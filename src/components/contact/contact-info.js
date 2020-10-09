import React from 'react';
import ReactGA from 'react-ga';

// const whatsappLink = `https://web.whatsapp.com/send?phone=598098534013&text=${encodeURI('Hola, quisiera consultarles por')}`;
const whatsappLink = `https://wa.me/59898534013?text=${encodeURI('Hola, quisiera consultarles por')}&lang=es`;

class ContactInfo extends React.Component {
    render() {
        return <section>
            <header className="major">
                <h2>Cómo contactarnos</h2>
            </header>
            <ul className="contact">
                <li className="fa-clock-o" title="Horario de atención" alt="Horario de atención" onClick={() => {
                        ReactGA.event({
                            category: 'User-Interaction',
                            action: 'Click',
                            label: 'Horario'
                        });
                    }}>
                Lunes a Viernes de 9 a 18:30 horas
                Sábados de 9 a 12 horas. (horario continuo)
                </li>
                <li className="fa-envelope-o" title="Contáctenos por email" alt="Contáctenos por email">
                    <ReactGA.OutboundLink
                        eventLabel="Email"
                        to="mailto:elcarnet@elcarnet.com.uy">
                        elcarnet@elcarnet.com.uy
                    </ReactGA.OutboundLink>
                </li>
                <li className="fa-phone" title="Contáctenos por Teléfono" alt="Contáctenos por Teléfono">
                    <ReactGA.OutboundLink
                        eventLabel="Llámenos al 2901 2985"
                        to="tel:29012985">
                        2901 2985
                    </ReactGA.OutboundLink>
                </li>
                <li className="fa-whatsapp" id="whatsapp" title="Chatea con nosotros por Whatsapp" alt="Chatea con nosotros por Whatsapp">
                    <ReactGA.OutboundLink
                        eventLabel="Chat por whatsapp"
                        to={whatsappLink}
                        target="_blank">
                        Whatsapp 098 534 013                        
                    </ReactGA.OutboundLink>
                </li>
                <li className="fa-home" title="Dirección" alt="Dirección">
                <ReactGA.OutboundLink
                    eventLabel="Ver Ejido 1291 en Google Maps"
                    to="https://www.google.com/maps/place/El+Carnet+Pl%C3%A1stico/@-34.906909,-56.186804,19z/data=!4m5!3m4!1s0x959f81cc7fdcaef5:0x87faf57708952236!8m2!3d-34.9068433!4d-56.186893?hl=es"
                    target="_blank">
                    Ejido 1291 (entre San José y Soriano, frente al Correo de la IM)
                </ReactGA.OutboundLink>
                <br />
                Montevideo, Uruguay</li>
                <li className="fa-facebook" title="Dirección" alt="Dirección">
                    <ReactGA.OutboundLink
                        eventLabel="Síguenos en Facebook"
                        to="https://www.facebook.com/elcarnetplastico/"
                        target="_blank">
                        Síguenos en Facebook
                    </ReactGA.OutboundLink>
                </li>
                <li className="fa-qrcode" title="Escanea código QR de la tarjeta de contacto" alt="Escanea código QR de la tarjeta de contacto">
                    <img src="/images/contact_QR.png" alt="Tarjeta contacto QR El Carnet Plástico" title="Tarjeta contacto QR El Carnet Plástico" height="190" width="190" onClick={() => {
                        ReactGA.event({
                            category: 'User-Interaction',
                            action: 'Click',
                            label: 'QR'
                        });
                    }} />
                </li>
            </ul>
        </section>;
    }
}

export default ContactInfo;