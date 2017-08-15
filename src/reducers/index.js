import auth from './auth';
import inProgress from '../components/in-progress/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  inProgress
});
