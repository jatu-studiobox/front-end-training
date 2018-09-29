import React, { Component } from 'react';
import './RecipeBody.css';
import './RecipeBox.css';
import react1png from './react1.png';
import react2png from './react2.png';
import react3png from './react3.png';
//import Hw3RecipeBox from './Hw3RecipeBox'

class RecipeBody extends Component {
    render() {
        return (<div className='BodyBox'>
                    <div className='RecipeBox'>
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
                    <div className='RecipeBox'>
                        <div><img src={react2png} alt="Recipe2" /></div>
                        <div className='ContentBox'>
                            <div className='Foodname'>Milkshake</div>
                            <div>
                                <div className='EachHead'><b>Ingredients :</b></div>
                                <ul>
                                    <li>2 Scopes Ice Cream</li>
                                    <li>8 ounces milk</li>
                                </ul>
                            </div>
                            <div>
                                <div className='EachHead'><b>Instructions :</b></div>
                                Combine Ice Cream and milk. Blend until creamy
                            </div>
                        </div>
                    </div>
                    <div className='RecipeBox'>
                        <div><img src={react3png} alt="Recipe3"/></div>
                        <div className='ContentBox'>
                            <div className='Foodname'>Avocado Toast</div>
                            <div>
                                <div className='EachHead'><b>Ingredients :</b></div>
                                <ul>
                                    <li>2 slices of bread</li>
                                    <li>1 avocado</li>
                                    <li>1 tablespoon olive oil</li>
                                    <li>1 pinch of salt</li>
                                    <li>pepper</li>
                                </ul>
                            </div>
                            <div>
                                <div className='EachHead'><b>Instructions :</b></div>
                                Toast bread. Slice avocado and spread on bread. Add salt, old, and pepper to taste.
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeBody;