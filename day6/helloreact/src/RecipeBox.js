import React, { Component } from 'react';
import './RecipeBox.css';

class RecipeBox extends Component {
    render() {
        return (<div className='RecipeBox'>
                    <div><img src={react1png} alt="Recipe1" /></div>
                    <div className='ContentBox'>
                        <div className='Foodname'>Spaghetti</div>
                        <div>
                            <div className='EachHead'><b>Ingredients :</b></div>
                            <ul>
                                <li>pasta</li>
                                <li>8 cups water</li>
                                <li>1 box Spaghetti</li>
                            </ul>
                        </div>
                        <div>
                            <div className='EachHead'><b>Instructions :</b></div>
                            Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeBox;