import { COUNTER_INCREMENT } from '../actions/counter';
import { COUNTER_DECREMENT } from '../actions/counter';

function rootReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + action.amount };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - action.amount };
    default:
      return state;
  }
}

export default rootReducer;
