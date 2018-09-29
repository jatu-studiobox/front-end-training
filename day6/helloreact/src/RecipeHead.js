import React, { Component } from 'react';
import RecipeMenu from './RecipeMenu';
import './RecipeHead.css';

class RecipeHead extends Component {
    render() {
        return (<div className='HeaderBox'>
                Recipe App
                <RecipeMenu />
                </div>
        );
    }
}

export default RecipeHead;


