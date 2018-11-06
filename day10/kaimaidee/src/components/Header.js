import React from 'react';
import { NavLink } from 'react-router-dom';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

const Header = ({ totalQuantity }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/" activeClassName="navbar-brand font-weight-bold" className="navbar-brand font-weight-bold">Kaimaidee</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-end">
                    <li className="nav-item">
                        <NavLink exact to="/my-cart" activeClassName="nav-link active" className="nav-link active">
                            <span className={ totalQuantity > 0 ? 'badge badge-warning' : 'badge badge-secondary'}>{totalQuantity}</span> <FontAwesomeIcon icon="shopping-cart" /> My Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;