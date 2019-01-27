import React from 'react';

class ContactInfo extends React.Component {
    render() {
        return <section>
            <header className="major">
                <h2>Cómo contactarnos</h2>
            </header>
            <ul className="contact">
                <li className="fa-clock-o" title="Horario de atención" alt="Horario de atención">
                Lunes a Viernes de 9 a 18:30 horas
                Sábados de 9 a 12 horas. (horario continuo)
                </li>
                <li className="fa-envelope-o" title="Email" alt="Email"><a href="mailto:elcarnet@elcarnet.com.uy" title="Contáctenos por email" alt="Contáctenos por email">elcarnet@elcarnet.com.uy</a></li>
                <li className="fa-phone" title="Teléfono" alt="Teléfono">
                    <a href="tel:29012985" title="Llámenos al 2901 2985" alt="Llámenos al 2901 2985" >2901 2985</a>
                </li>
                <li className="fa-home" title="Dirección" alt="Dirección">
                    <a href="https://www.google.com/maps/place/El+Carnet+Pl%C3%A1stico/@-34.906909,-56.186804,19z/data=!4m5!3m4!1s0x959f81cc7fdcaef5:0x87faf57708952236!8m2!3d-34.9068433!4d-56.186893?hl=en"
                title="Ver Ejido 1291 en Google Maps" alt="Ver Ejido 1291 en Google Maps" target="_blank" rel="noopener noreferrer">Ejido 1291 (entre San José y Soriano, frente al Correo de la IM)</a>
                <br />
                Montevideo, Uruguay</li>
            </ul>
        </section>;
    }
}

export default ContactInfo;