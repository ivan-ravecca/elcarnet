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
                <li className="fa-envelope-o" title="Email" alt="Email"><a href="#mmm">elcarnet@elcarnet.com.uy</a></li>
                <li className="fa-phone" title="Teléfono" alt="Teléfono">2901 2985</li>
                <li className="fa-home" title="Dirección" alt="Dirección">Ejido 1291 (entre San José y Soriano, frente al Correo de la IM)<br />
                Montevideo, Uruguay</li>
            </ul>
        </section>;
    }
}

export default ContactInfo;