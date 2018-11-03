import { connect } from 'react-redux';
import { setSearch } from '../actions';
import RecipeSearch from '../components/RecipeSearch';

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(setSearch(e.target.value))
});

export default connect(
    null,
    mapDispatchToProps
)(RecipeSearch);