import React from 'react';

class Products extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <section>
            <h2>Producto {this.props.match.params.productId}</h2>
            </section>;
    }
}

export default Products;