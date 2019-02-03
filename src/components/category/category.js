import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Category extends React.Component {
    constructor(props){
        super(props);
        debugger;
        this.props = props;

        let aux = [];
        for(let i = 0; i < 5; i++) {
            aux.push({
                productId: i,
                url: `/categoria/categoria1/producto/producto_${i}`,
                name: `Producto_${i}`,
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                images: [
                    {
                        id: 1,
                        url: 'https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg'
                    },{
                        id: 1,
                        url: 'https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg'
                    }
                ]
            })
        }
        this.products = [];
        //this.products = this.props.products;
        console.log(this.props);
    }
    componentWillUpdate() {
        debugger;
    }
    render() {
        return <div className="posts">
            {this.props.products.map(product => {
                const name = product.name;
                const url = `/categoria/billeteras-en-pvc/producto/${product.productUrl}`;
                //const imgSrc = `${product.photoDTO.photo100x100}`;
                const imgSrc = `${product.photoDTO.photo240x240}`;
                return <article key={product.productId}>
                    <Link to={url} alt={name} title={name}>
                        <img src={imgSrc} alt={name} title={name} />
                    </Link>
                    <h3>{name}</h3>
                    <p>
                    {product.desc}
                    </p>
                    <ul className="actions">
                        <li>
                            <Link to={url} alt={name} title={name} className="button">Ver más</Link>
                        </li>
                    </ul>
                </article>
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