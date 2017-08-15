import { ADD_TO_LIST, DELETE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      if (state.indexOf(action.item) > -1) {
        return state;
      } else {
        return [action.item, ...state];
      }
    case DELETE:
      return state.filter(item => (item !== action.item));
    default:
      return state;
  }
}
