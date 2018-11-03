export const ADD_RECIPE = 'ADD_RECIPE';
export const DEL_RECIPE = 'DEL_RECIPE';
export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = termSearch => ({
    type: SET_SEARCH,
    termSearch
});

export const addRecipe = recipe => ({ 
    type: ADD_RECIPE, 
    recipe 
});

export const delRecipe = id => ({ 
    type: DEL_RECIPE, 
    id 
});