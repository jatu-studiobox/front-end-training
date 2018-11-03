import React from 'react';
import RecipeBox from './RecipeBox';

const RecipeList = (props) => {
    const recipes = props.recipes.map((r, i) => (
        <RecipeBox key={r.id} {...r} deleteRecipe={props.delRecipe} />
    ));
    return (
        <div className="container">
            <div className="row">
                {recipes}
            </div>
        </div>
    );
}

export default RecipeList;