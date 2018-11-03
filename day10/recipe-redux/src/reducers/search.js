import { SET_SEARCH } from '../actions';

const search = (state = '', action) => {
    switch (action.type) {
        case SET_SEARCH:
            console.log('action.termSearch = ' + action.termSearch);
            return action.termSearch
        default:
            return state
    }
}

export default search;