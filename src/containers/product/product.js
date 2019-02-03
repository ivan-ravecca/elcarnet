import Sharing from '../../components/sharing/sharing';
import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Product extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    createProductImage(name, image) {
        name = `${name} - El Carnet Plástico`;
        return <div className="col-4" key={image.photoId}>
            <span className="image fit">
                <img src={image.photo800x600} alt={name} title={name} />
            </span>
        </div>
    }

    createProduct(product, related) {
        if(product === undefined) return '';
        debugger;
        const name = product.name;
        return <section>
            <h2 title={name}>{name} - {this.props.match.params.productId}</h2>
            <Sharing ></Sharing>
            <div className="col-6 col-12-medium">
                <p>{product.desc}</p>
            </div>
            
            <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                    {this.createProductImage(name, product.photoDTO)}
                </div>
            </div>
            
            {this.createRelatedProducts(related)}
        </section>
    }

    createRelatedProducts(products) {
        if(products === undefined) return '';
        return <span>
            <header className="major">
                <h3>Otros productos relacionados</h3>
            </header>
            <div className="posts">
                {products.map(product => {
                    const url = `/categoria/billeteras-en-pvc/producto/${product.name}`;
                    return <article key={product.productId}>
                        <Link to={url} alt={product.name} title={product.name} className="">
                            <img src={product.photoDTO.photo100x100} alt={product.name} title={product.name} />
                        </Link>
                        <h4>{product.name}</h4>
                    </article>
                })}
            </div>
        </span>
    }
    render() {
        const product = this.props.products[0];
        const related = this.props.products.splice(1, 3);
        return this.createProduct(product, related);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.bulkData.products
    };
}

Product.propTypes = {
    products: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Product);