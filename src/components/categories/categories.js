import React from 'react';

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <section>
            <h2>Categorías {this.props.match.params.categoryId}</h2>
            </section>;
    }
}

export default Categories;