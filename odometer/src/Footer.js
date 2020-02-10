import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'GlassCharlie'
        }
    }

    render() {
        return (
            <>
            <p>&copy; {this.state.name}</p>
            </>
        )
    }
}

export default Footer;