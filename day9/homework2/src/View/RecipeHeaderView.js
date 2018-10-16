import React, { Component } from 'react';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

class RecipeHeaderView extends Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-teal">
                <a className="navbar-brand font-weight-bold" href="#">Recipe App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-end">
                        <li className="nav-item active">                            
                            <a className="nav-link" href="#" onClick={this.props.handleOpenForm}><FontAwesomeIcon icon="plus-circle" /> New Recipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon="home" /> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon="info-circle" /> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon="comments" /> Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default RecipeHeaderView;