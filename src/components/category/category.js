import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Category extends React.Component {
    constructor(props){
        super(props);
    }
    createProduct(product) {
        const name = product.name;
        const url = `/categoria/billeteras-en-pvc/producto/${product.productUrl}`;
        const imgSrc = `${product.photoDTO.photo240x240}`;
        return <article key={product.productId}>
            <Link to={url} alt={name} title={name}>
                <img src={imgSrc} alt={name} title={name} />
            </Link>
            <h3 title={name}>{name}</h3>
            <p>
            {product.desc}
            </p>
            <ul className="actions">
                <li>
                    <Link to={url} alt={`Ver ${name}`} title={`Ver ${name}`} className="button">Ver más</Link>
                </li>
            </ul>
        </article>
    }
    render() {
        return <div className="posts">
            {this.props.products.map(product => {
                return this.createProduct(product);
            })}
        </div>;
    }
}


function mapStateToProps(state, ownProps) {
    return {
        categories: state.bulkData.categories,
        products: state.bulkData.products
    };
}

Category.propTypes = {
    categories: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Category);