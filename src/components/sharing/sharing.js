import React from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import ContactForm from '../contact/contact-form';

const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
};

class Sharing extends React.Component {

    constructor(props) {
        super(props);
        Modal.setAppElement('#root');
        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(event) {
        event.preventDefault();
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render() {
        return <div id="sharing">
            <ul className="icons">
                {/* <li>
                    <Link to="#" className="icon fa-twitter" title="Compartir en Twitter" alt="Compartir en Twitter">
                        <span className="label">Compartir en Twitter</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-facebook" title="Compartir en Facebook" alt="Compartir en Facebook">
                        <span className="label">Compartir en Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-instagram" title="Compartir en Instagram" alt="Compartir en Instagram">
                        <span className="label">Compartir en Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="icon fa-share-alt" title="Compartir por email" alt="Compartir por email">
                        <span className="label">Compartir por email</span>
                    </Link>
                </li>
                <li> - </li>
                */}
                <li>
                    <Link to="#" className="icon fa-envelope" title="Consultar por éste artículo" alt="Consultar por éste artículo" onClick={this.openModal}>
                    <span className="label">Consultar por éste artículo</span>
                    </Link>
                </li>
            </ul>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <ContactForm title="¿Que desea consultarnos sobre éste producto?" reset={this.closeModal}></ContactForm>
            </Modal>
        </div>;
    }
}

export default Sharing;