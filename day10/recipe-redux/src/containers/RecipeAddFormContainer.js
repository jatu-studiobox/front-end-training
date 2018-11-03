import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import RecipeAddForm from '../components/RecipeAddForm';

export default connect (null, { addRecipe })(RecipeAddForm);