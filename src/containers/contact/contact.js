import React from 'react';
import ContactForm from '../../components/contact/contact-form';
import ContactInfo from '../../components/contact/contact-info';

class Contact extends React.Component {
    render() {
        return <section>
            <header className="major">
                <h2>Contacto</h2>
            </header>
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
        </section>;
    }
}

export default Contact;