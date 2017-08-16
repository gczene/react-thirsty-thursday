import React from 'react';
import MyList from './my-list';

class ListPanel extends React.Component{
  constructor(props) {
    super(props)
  }

  state = {
    current: ''
  }

  onChange = (e) => {
    const {target: {value: current}} = e;
    this.setState({
      current
    })
  }

  submit = (booze) => {
    if (booze) {
      this.props.addBooze(booze);
      this.setState({current: ''});
    }
  }

  render() {
    const {current} = this.state;
    return (
      <div className="row">
        <div className="col mr-3 ml-3">
          <div className="input-group pt-2 pb-2">
            <input onChange={this.onChange} value={current} type="text" className="form-control" placeholder="BOOZE" aria-describedby="basic-addon2" />
            <span className="input-group-addon p-0" id="basic-addon2"><button onClick={() => this.submit(this.state.current)} className="btn btn-primary float-right">OK</button></span>
          </div>
          <MyList deletePreviousOrders={this.props.deletePreviousOrders} addBooze={this.submit} items={this.props.items} />
        </div>
      </div>
    );
  }
}

export default ListPanel;
