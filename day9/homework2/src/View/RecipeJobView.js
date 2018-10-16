import React, { Component } from 'react';
import RecipeHeaderView from './RecipeHeaderView';
import RecipeAddController from '../Controller/RecipeAddController';
import RecipeBoxView from './RecipeBoxView';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

class RecipeJobView extends Component {
    render() {
        // Destruction props
        const { foods, handleOpenForm, showForm, handleCloseForm, doAddRecipe, doDeleteRecipe, doSearch} = this.props;
        
        const recipeBox = foods.map(f => <RecipeBoxView id={f.id} pic={f.pic} title={f.title} ingredients={f.ingredients} instructions={f.instructions} deleteRecipe={doDeleteRecipe} />);
        
        return (
            <React.Fragment>
                <RecipeHeaderView handleOpenForm={handleOpenForm} />
                <div className="container pt-2 pb-2">
                    <div className="row justify-content-center">
                        <div className="col col-lg-1 text-right pr-1 align-self-center"><FontAwesomeIcon icon="search" /> Search :</div>
                        <div className="col-auto align-left pl-0"><input className="form-control form-control-sm" type="text" name="myInput" onKeyUp={doSearch} /></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <RecipeAddController showForm={showForm} handleCloseForm={handleCloseForm} doAddRecipe={doAddRecipe} />
                </div>
                <div className="container">
                    <div className="row">
                        {recipeBox}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeJobView;