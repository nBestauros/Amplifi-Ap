import React from 'react';

import logo from '../Logo1.png'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Logo-container" onClick={
                    () => { this.props.clearSelection(); }
                }>
                    <img className="Header-logo" src={logo}/>
                </div>
                <div className="Name-container">Amplifi</div>
            </div>
        );
    }
}
export default Header