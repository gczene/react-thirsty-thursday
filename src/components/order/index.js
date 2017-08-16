import React from 'react';
import ListPanel from './list-panel';
import {addBooze, getMyHistoryList} from  '../../utils/local-storage';
import { connect } from 'react-redux';
import {addToList} from '../in-progress/actions';
import auth from '../../utils/auth';

class Order extends React.Component{
  constructor(props) {
    super(props);
  }
  state = {
    closed: false,
    items: []
  }

  componentDidMount() {
    this.setState({
      items: getMyHistoryList()
    });
  }

  addBooze = (booze) => {
    if (booze) {
      addBooze(booze)
      this.setState({items: getMyHistoryList()});
      this.props.addToList(booze);
      this.toggle();
    }
  }
  toggle = () => {
    this.setState({
      closed: !this.state.closed
    });
  }

  render() {
    const {closed} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col mr-3 ml-3 mt-3 opacity p-3" onClick={this.toggle}>
            {auth.username}, order here:
            <span className="octicon octicon-triangle-down float-right mt-1"></span>
          </div>
        </div>
        {!closed && <ListPanel items={this.state.items} addBooze={this.addBooze} />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {inProgress} = state;
  return {
    inProgress
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (item) => dispatch(addToList(item))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
