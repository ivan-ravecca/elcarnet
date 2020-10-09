import Sharing from '../../components/sharing/sharing';
import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class Product extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        ReactGA.pageview(nextProps.location.pathname);
        window.scrollTo(0, 0);
    }

    createProductImage(name, image) {
        name = `${name} - El Carnet Plástico`;
        return <div className="col-4" key={image.photoId}>
            <span className="image fit">
                <img src={image.photo800x600} alt={name} title={name} />
            </span>
        </div>
    }

    createProduct(product, category, related) {
        if(product === undefined) return '';

        const name = product.name;
        document.title = `El Carnet Plástico - ${name}`;
        return <section>
            <h2 title={name}>{name}</h2>
            <Sharing ></Sharing>
            <div className="col-6 col-12-medium">
                <p>{product.desc}</p>
            </div>
            
            <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                    {this.createProductImage(name, product.photoDTO)}
                </div>
            </div>
            
            {this.createRelatedProducts(related, category)}
        </section>
    }

    createRelatedProducts(products, category) {
        if(products.length === 0) return '';
        return <span>
            <header className="major">
                <h3>Otros productos relacionados</h3>
            </header>
            <div className="posts">
                {products.map(product => {
                    const url = `/categoria/${category.categoryUrl}/producto/${product.productUrl}`;
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
        let selectedProduct;
        let related = [];
        const category = this.props.categories.find(category => {
            return category.categoryUrl === this.props.match.params.categoryId;
        });

        if (category === undefined) return '';
        category.products.forEach(product => {
            if(product.productUrl === this.props.match.params.productId) {
                selectedProduct = product;
            } else {
                related.push(product);
            }
        });

        return this.createProduct(selectedProduct, category, related);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categories: state.bulkData.categories
    };
}

Product.propTypes = {
    categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Product);