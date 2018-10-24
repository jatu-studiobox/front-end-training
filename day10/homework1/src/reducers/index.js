import { ADD_TODO, DELETE_TODO } from '../actions/todos';

const initState = {
    todos: [
        {
            id: 0,
            text: 'Use Redux'
        }
    ]
};

function rootReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                {
                    id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.text
                }
                ]
            }
        case DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default rootReducer;
