import InProgress from './in-progress';
import { connect } from 'react-redux';
import {deleteBoozeFromList} from './actions';

const mapStateToProps = (state) => {
  const { inProgress } = state;
  return { inProgress };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (booze) => dispatch(deleteBoozeFromList(booze))
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (InProgress);
