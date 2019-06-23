import React from 'react';

export default class Header extends React.Component {
    changeState() {
        this.props.changeLoginState();
    }
    render () {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    Star-Portal
                </div>
                {this.props.loggedIn ? <button className="logout-btn" onClick={this.changeState.bind(this)} type="button">logout</button>: ''}
            </nav>
        )
    }
}