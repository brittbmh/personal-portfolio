import React, { Component } from 'react';

class Header extends Component {
    //base header to display on both pages
    render() {
        return (
            <div className="headerDiv">
                <img src="/images/bc_pic.jpg" alt="logo"/>
            </div>
        )
    }
}

export default Header;