import React, { Component } from 'react';
import RecipeJobView from '../View/RecipeJobView';
import react1png from '../react1.png'
import react2png from '../react2.png';
import react3png from '../react3.png';

let Foods = [
    { 
        id : 1, 
        pic : react1png,
        title : 'Spagetthi',
        ingredients : ['pasta' , '8 cups water', '1 box spaghetti'],
        instructions : 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.'
    },
    { 
        id : 2,
        pic : react2png,
        title : 'Milkshake',
        ingredients : ['2 Scopes Ice Cream' , '8 ounces milk'],
        instructions : 'Combine Ice Cream and milk. Blend until creamy'
    },
    { 
        id : 3, 
        pic : react3png,
        title : 'Avocado Toast',
        ingredients : ['2 slices of bread' , '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
        instructions : 'Toast bread. Slice avocado and spread on bread. Add salt, old, and pepper to taste.'
    }
];

class RecipeJobController extends Component {
    state = { 
        foods : [...Foods],
        showForm : 'none'
    }; 

    removeFood = (idx) => {
        let newFoods = Foods.filter(food => food.id !== idx);
        return [...newFoods];
    }

    deleteRecipe = (idx) => {
        // Delete selected recipe
        Foods = this.removeFood(idx);
        //console.log(idx);
        // Set State
        this.setState({
            //foods: this.state.foods.filter(food => food.id !== idx)
            foods: [...Foods]
        });
    }
    
    addFood = (recipe) => {
        let newFoods = [...Foods,
                        {
                            id : Foods.reduce((maxId, food) => Math.max(food.id, maxId), -1) + 1,
                            pic : recipe.img,
                            title : recipe.title,
                            ingredients : [...recipe.ingredients],
                            instructions : recipe.instructions
                        }];
        return newFoods;
    }

    addRecipe = (recipe) => {
        //console.log(recipe);
        // Add new recipe
        Foods = this.addFood(recipe);
        // Set State
        this.setState({
            foods: [...Foods],
            showForm : 'none'
        });
    }

    handleChange = (e) => {
        //alert (e.target.value);
        if (e.target.value !== '') {
            let beforeFilterFoods = [...Foods];
            this.setState({ 
                foods : beforeFilterFoods.filter(food => {
                    return food.title.toLowerCase().indexOf(e.target.value) > -1;
                })
            });
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
        return (<RecipeJobView foods={this.state.foods} handleOpenForm={this.handleOpenForm} showForm={this.state.showForm} handleCloseForm={this.handleCloseForm} doAddRecipe={this.addRecipe} doDeleteRecipe={this.deleteRecipe} doSearch={this.handleChange} />);
    }
}

export default RecipeJobController;