import React, {Component} from 'react';
import RecipeHead from './RecipeHead';
import RecipeSearch from './RecipeSearch';
import RecipeBody from './RecipeBody';
import RecipeFooter from './RecipeFooter';

class RecipeHome extends Component {
    render() {
        return (
            <React.Fragment>
                <RecipeHead />
                <RecipeSearch />
                <RecipeBody />
                <RecipeFooter />
            </React.Fragment>
        );
    };
}

export default RecipeHome;