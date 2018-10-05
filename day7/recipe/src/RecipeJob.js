import React, { Component } from 'react';
import './RecipeJob.css';
import './RecipeBox.css';
import react1png from './react1.png';
import react2png from './react2.png';
import react3png from './react3.png';
import RecipeHeader from './RecipeHeader';
import RecipeBox from './RecipeBox';
import RecipeAddForm from './RecipeAddForm';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

let Foods = [
    { 
        id : 1, 
        pic : 'react1.png',
        title : 'Spagetthi',
        ingredients : ['pasta' , '8 cups water', '1 box spaghetti'],
        instructions : 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.'
    },
    { 
        id : 2,
        pic : 'react2.png',
        title : 'Milkshake',
        ingredients : ['2 Scopes Ice Cream' , '8 ounces milk'],
        instructions : 'Combine Ice Cream and milk. Blend until creamy'
    },
    { 
        id : 3, 
        pic : 'react3.png',
        title : 'Avocado Toast',
        ingredients : ['2 slices of bread' , '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
        instructions : 'Toast bread. Slice avocado and spread on bread. Add salt, old, and pepper to taste.'
    }
  ];

class RecipeJob extends Component {
    state = { 
        foods : [...Foods],
        showForm : 'none'
    }; 

    removeFood = (idx) => {
        let newFoods = Foods.filter(food => food.id !== idx);
        return [...newFoods];
    }

    deleteRecipe = (idx) => {
        Foods = this.removeFood(idx);
        //console.log(idx);
        this.setState({
            //foods: this.state.foods.filter(food => food.id !== idx)
            foods: [...Foods]
        });
    }

    addRecipe = (recipe) => {
        console.log(recipe);
        this.setState({
            foods: [
                ...Foods,
                {
                    id : Foods.reduce((maxId, food) => Math.max(food.id, maxId), -1) + 1,
                    pic : recipe.img,
                    title : recipe.title,
                    ingredients : [...recipe.ingredients],
                    instructions : recipe.instructions
                }
            ],
            showForm : 'none'
        });
    }

    handleChange = (e) => {
        //alert (e.target.value);
        if (e.target.value != ''){
            let beforeFilterFoods = [...Foods];
            //let beforeFilterFoods = this.state.foods;
            this.setState({ foods : beforeFilterFoods.filter(food => {
                return food.title.toLowerCase().indexOf(e.target.value) > -1;
            }) });
        }
        else {
            this.setState({ foods : [...Foods] });
        }
    }

    handleCloseForm = () => {
        this.setState({
            showForm : 'none'
        });
    }

    handleOpenForm = () => {
        this.setState({
            showForm : 'block'
        });
    }

    render() {
        const { foods } = this.state;

        const recipeBox = foods.map(f => <RecipeBox id={f.id} pic={f.pic} title={f.title} ingredients={f.ingredients} instructions={f.instructions} deleteRecipe={this.deleteRecipe} />);

        return (<React.Fragment>
                <RecipeHeader openForm={this.handleOpenForm} />
                <div className="container pt-2 pb-2">
                    <div className="row justify-content-center">
                        <div className="col col-lg-1 text-right pr-1 align-self-center"><FontAwesomeIcon icon="search" /> Search :</div>
                        <div className="col-auto align-left pl-0"><input className="form-control form-control-sm" type="text" name="myInput" onKeyUp={this.handleChange} /></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <RecipeAddForm showForm={this.state.showForm} handleCloseForm={this.handleCloseForm} onSubmit={this.addRecipe} />
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

export default RecipeJob;