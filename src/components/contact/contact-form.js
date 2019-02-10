import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../actions/global-actions';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    }

    validateInput() {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!this.state.name || this.state.name.length === 0) {
            return false;
        }
        if(!emailRegEx.test(String(this.state.email).toLowerCase())) {
            return false;
        }

        if(!this.state.message || this.state.message.length === 0) {
            return false;
        }
        return true;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.validateInput()) {
            alert("Algunos campos requieridos no son válidos");
            return;
        }
        this.props.actions.getInTouch({
            user: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message,
            ref: window.location.href
        });
        this.resetState();
    }

    render() {
        return <section>
            <header className="major">
                <h3>Por medio de nuestro formulario</h3>
            </header>
            <form onSubmit={this.handleSubmit}>
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                     <input type="text" name="name" placeholder="Nombre" required value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="tel" name="phone" placeholder="Teléfono" value={this.state.phone} onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <input type="email" name="email" placeholder="Email" required value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="col-12">
                        <textarea name="message" placeholder="Escríbanos su mensaje" required rows="6" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li>
                                <button value="Enviar" alt="Enviar" title="Enviar" className="primary" onClick={this.handleSubmit}>Enviar</button>
                            </li>
                            <li><input type="reset" value="Limpiar" alt="Limpiar" title="Limpiar" onClick={this.resetState} /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        BULK_DATA: state.bulkData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(globalActions, dispatch)
    }
}
  
ContactForm.propTypes = {
    actions: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);