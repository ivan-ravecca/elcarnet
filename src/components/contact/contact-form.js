import React from 'react';

class ContactForm extends React.Component {
    render() {
        return <section>
            <header className="major">
                <h3>Por medio de nuestro formulario</h3>
            </header>
            <form method="post" action="#">
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Nombre" />
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Teléfono" />
                    </div>
                    <div className="col-12">
                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                    </div>

                    <div className="col-12">
                        <textarea name="demo-message" id="demo-message" placeholder="Escríbanos su mensaje" rows="6"></textarea>
                    </div>

                    <div className="col-12">
                        <ul className="actions">
                            <li><button value="Enviar" alt="Enviar" title="Enviar" className="primary">Enviar</button></li>
                            <li><input type="reset" value="Limpiar" alt="Limpiar" title="Limpiar" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>;
    }
}

export default ContactForm;