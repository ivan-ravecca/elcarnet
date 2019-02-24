import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Category from '../../components/category/category';
import ReactGA from 'react-ga';

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    updateTitleName(categories, categoryId) {
        if(!categories || categories.length === 0) {
            return;
        }
        const selectedCategory = categories.find(category => {
            return category.categoryUrl === categoryId;
        });
        if (selectedCategory === undefined) {
            return;
        }
        document.title = `El Carnet Plástico - ${selectedCategory.categoryName}`;
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        this.updateTitleName(this.props.categories, this.props.match.params.categoryId);
    }

    componentWillUpdate(nextProps) {
        this.updateTitleName(nextProps.categories, nextProps.match.params.categoryId);
    }

    render() {
        const selectedCategory = this.props.categories.find(category => {
            return category.categoryUrl === this.props.match.params.categoryId;
        });
        if (selectedCategory === undefined) return '';
        return <section>
            <header className="major">
                <h2>Categoría: {selectedCategory.categoryName}</h2>
            </header>
            <Category categoryUrl={selectedCategory.categoryUrl} />
        </section>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categories: state.bulkData.categories
    };
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Categories);