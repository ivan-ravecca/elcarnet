import React from 'react';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import ContactInfo from '../contact/contact-info';
import { Link } from "react-router-dom";


class Sidebar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return <div id="sidebar" className={(this.state.isToggleOn ? 'inactive' : '')}>
            <div className="inner">
                <Navigation action={() => this.handleClick()}></Navigation>
                <ContactInfo></ContactInfo>
                <Footer></Footer>
            </div>
            <Link alt="Abrir/Cerrar panel" title="Abrir/Cerrar panel" className={(this.state.isToggleOn ? 'toggle closed' : 'toggle open')} to="#" onClick={() => this.handleClick()}>&nbsp;</Link>

        </div>;
    }
}
/*
Sidebar.propTypes = {
    categories: PropTypes.array.isRequired
}
*/
export default Sidebar;