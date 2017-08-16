import socket from '../../utils/socket';
import {addToMyPendingList, removeFromMyPendingList, resetPendingOrders} from '../../utils/local-storage';
export const ADD_TO_LIST = 'ADD_BOOZE_TO_LIST';
export const DELETE = 'DELETE_BOOZE_FROM_LIST';
export const RESET = 'RESET_PENDING_LIST';

export const addToList = (item) => {
  socket.emit(ADD_TO_LIST, {item});
  addToMyPendingList(item);
  return {
    type: ADD_TO_LIST,
    item
  }
}

export const deleteBoozeFromList = (item) => {
  socket.emit(DELETE, {item})
  removeFromMyPendingList(item);
  return {
    type: DELETE,
    item
  }
}

export const resetPendingList = () => {
  resetPendingOrders();
  return {
    type: RESET
  }
}
