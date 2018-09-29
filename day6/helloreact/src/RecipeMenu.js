import React, {Component} from 'react';
import './RecipeMenu.css';

class RecipeMenu extends Component {
    render() {
        return (<span className='MenuBox'>
                    <a>New Recipe</a>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact Us</a>
                </span>
        );
    }
}

export default RecipeMenu;