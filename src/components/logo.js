import React, { Component } from 'react';

class Logo extends Component {
    render() {

        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }

        return (
            <div className="logo-main">
                <img src="/assets/img/ds_circle_logo.png" alt="Daily Smarty Logo big" style={size} />
            </div>
        );
    }
}

export default  Logo;