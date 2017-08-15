export const ADD_TO_LIST = 'ADD_BOOZE_TO_LIST';
export const DELETE = 'DELETE_BOOZE_FROM_LIST';

export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item
  }
}

export const deleteBoozeFromList = (item) => {
  return {
    type: DELETE,
    item
  }
}
