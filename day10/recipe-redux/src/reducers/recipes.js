import { ADD_RECIPE, DEL_RECIPE } from '../actions';

const initState = {
    recipes: [
        {
            id: 1,
            pic: "spaghetti.jpg",
            title: "Spagetthi",
            ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
            instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.'
        },
        {
            id: 2,
            pic: "milkshake.jpg",
            title: "Milkshake",
            ingredients: ['2 Scopes Ice Cream', '8 ounces milk'],
            instructions: 'Combine Ice Cream and milk. Blend until creamy'
        },
        {
            id: 3,
            pic: "avocado_toast.jpg",
            title: "Avocado Toast",
            ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
            instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, old, and pepper to taste.'
        }
    ]
};

const recipes = (state = initState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes,
                {
                    id: state.recipes.reduce((maxId, recipe) => Math.max(recipe.id, maxId), -1) + 1,
                    //id: action.id,
                    pic: action.recipe.img,
                    title: action.recipe.title,
                    ingredients: action.recipe.ingredients,
                    instructions: action.recipe.instructions
                }
                ]
            }
        case DEL_RECIPE:
            return {
                ...state, recipes: state.recipes.filter(recipe => recipe.id !== action.id)
            };
        default:
            return state;
    }
};

export default recipes;