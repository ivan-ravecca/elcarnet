import React from 'react';

class Contact extends React.Component {
    render() {
        return <section>
            <header className="major">
                <h2>Contacto</h2>
            </header>
            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="contact">
                    <li className="fa-envelope-o"><a href="#mmm">elcarnet@elcarnet.com.uy</a></li>
                    <li className="fa-phone">2901 2985</li>
                    <li className="fa-home">Ejido 1291<br />
                    Montevideo, Uruguay</li>
                </ul>
            </section>;
    }
}

export default Contact;