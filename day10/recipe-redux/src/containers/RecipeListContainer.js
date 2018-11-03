import { connect } from 'react-redux';
import { delRecipe } from '../actions';
import RecipeList from '../components/RecipeList';

//const RecipeListContainer = ()

// const filteredRecipes = props.recipes.filter(r => r.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1);
//     const recipes = filteredRecipes.map((r, i) => (
//         <RecipeBox key={r.id} {...r} deleteRecipe={props.delRecipe} />
//     ));

const getVisibleRecipes = (recipes, filter) => {
    console.log('filter = ' + filter);
    if (filter !== '') {
        return recipes.filter(r => r.title.toLowerCase().indexOf(filter.toLowerCase()) > -1);
    }
    else {
        return recipes;
    }
}

const mapStateToProps = state => ({
    recipes: getVisibleRecipes(state.recipes.recipes, state.search)
    //recipes: state.recipes
});

export default connect(mapStateToProps, { delRecipe })(RecipeList);