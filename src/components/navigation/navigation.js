import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
        this.callBack = this.props.action;
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return <nav id="menu">
            <header className="major">
            <h2>Él Carnet Plástico</h2>
            </header>
            <ul>
                <li>
                    <Link to="/" alt="Inicio" title="Inicio" onClick={()=>{this.callBack()}}>Inicio</Link>
                </li>
                <li>
                    <Link to="/la-empresa" alt="Sobre nosotros" title="Sobre nosotros" onClick={()=>{this.callBack()}}>La empresa</Link>
                </li>
                <li >
                    <span className={'opener ' + (this.state.isToggleOn ? 'active' : '')} onClick={() => this.handleClick()}>Productos</span>
                    <ul>
                        {this.props.categories.map((category) => {
                            if(category.total === 0) { return ''; }
                            const text = `${category.categoryName} ${category.total > 0 ? `(${category.total})` : ''}`;
                            return <li key={category.categoryId}>
                                    <Link to={'/categoria/' + category.categoryUrl} alt={text} title={text} onClick={()=>{this.callBack()}}>{text}</Link>
                                </li>
                        })}
                    </ul>
                </li>
                <li>
                    <Link to="/contacto" alt="Contáctese con nosotros" title="Contáctese con nosotros" onClick={()=>{this.callBack()}}>Contacto</Link>
                </li>
            </ul>
        </nav>;
    }
}
function mapStateToProps(state, ownProps) {
    return {
        categories: state.bulkData.categories
    };
}

Navigation.propTypes = {
    categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Navigation);