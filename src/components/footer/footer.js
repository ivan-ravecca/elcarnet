import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer id="footer">
                <p className="copyright">&copy; {(new Date()).getFullYear()} El carnet Plástico s.r.l. </p>
            </footer>;
    }
}

export default Footer;