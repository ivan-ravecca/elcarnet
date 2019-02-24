import React from 'react';
import ContactForm from '../../components/contact/contact-form';
import ContactInfo from '../../components/contact/contact-info';
import ReactGA from 'react-ga';

class Contact extends React.Component {
    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        document.title = 'El Carnet Plástico - Formulario de contacto';
    }
    render() {
        return <section>
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
        </section>;
    }
}

export default Contact;