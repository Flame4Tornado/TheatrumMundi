import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    state = {  
        isShown: false
    }

    handleClick = () => {
        this.setState({
            isShown: !this.state.isShown
        })
    }

    render() { 
        const isActive = (path, match, location) => !!(match || path === location.pathname);
        return ( 
            <header className="header">
                <nav className={this.state.isShown? "header__nav header__nav--active" : 'header__nav'}>
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink  to="/news" exact activeClassName='active' isActive={isActive.bind(this, '/news')}>
                                Aktualności
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/about" exact activeClassName='active' isActive={isActive.bind(this, '/about')}>
                                Historia
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/theatre" exact activeClassName='active' isActive={isActive.bind(this, '/theatre')}>
                                Spektakle
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={this.state.isShown? "header__bar header__bar--active" : 'header__bar'}>
                    <button onClick={this.handleClick}className={this.state.isShown? "header__btn header__btn--active" : 'header__btn'}>
                        <span></span>
                    </button>
                </div>
            </header>
         );
    }
}
 
export default Header;