import React from 'react';
import Category from '../../components/category/category';

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <section>
            <header className="major">
                <h2>Categorías {this.props.match.params.categoryId}</h2>
            </header>
            <Category />
        </section>;
    }
}

export default Categories;