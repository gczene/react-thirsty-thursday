import React from 'react';
import ListPanel from './list-panel';
import {addBooze, getItems} from  '../../utils/local-storage';

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
      items: getItems()
    });
  }

  addBooze = (booze) => {
    if (booze) {
      addBooze(booze)
      this.setState({items: getItems()})
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
            Order here:
            <span className="octicon octicon-triangle-down float-right mt-1"></span>
          </div>
        </div>
        {!closed && <ListPanel items={this.state.items} addBooze={this.addBooze} />}
      </div>
    );
  }
}

export default Order;
