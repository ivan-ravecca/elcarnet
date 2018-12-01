import React from 'react';
import { Link } from "react-router-dom";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
        this.categories = [];
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

    componentDidMount() {
        // Do ajax call, etc
        let aux = [];
        for(let i = 0; i < 20; i++) {
            aux.push({
                categoryId: i,
                url: `/categoria/categoria${i}/`,
                name: `Categoría_${i}`,
                products: []
            })
        }
        this.categories = aux;
    }
    render() {
        return <nav id="menu">
            <header className="major">
            <h2>Él Carnet Plástico</h2>
            </header>
            <ul>
                <li>
                    <Link to="/" alt="Inicio" title="Inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/la-empresa" alt="Sobre nosotros" title="Sobre nosotros">La empresa</Link>
                </li>
                <li>
                    <span className={'opener ' + (this.state.isToggleOn ? 'active' : '')} onClick={() => this.handleClick()}>Productos</span>
                    <ul>
                        {this.categories.map((category) => {
                            const text = `${category.name} ${category.products.length > 0 ? category.products.length : ''}`;
                            return <li key={category.categoryId}>
                                    <Link to={category.url} alt={text} title={text}>{text}</Link>
                                </li>
                        })}
                    </ul>
                </li>
                <li>
                    <Link to="/contacto" alt="Contáctese con nosotros" title="Contáctese con nosotros">Contacto</Link>
                </li>
            </ul>
        </nav>;
    }
}

export default Navigation;