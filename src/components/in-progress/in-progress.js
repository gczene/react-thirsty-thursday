import React from 'react';

class InProgress extends React.Component{

  delete = (booze) => {
    this.props.delete(booze);
  }
  render() {
    const {inProgress} = this.props;
    if (!inProgress.length) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col mr-3 ml-3 mt-3 opacity p-3" onClick={this.toggle}>
            Pending:
          </div>
        </div>
        <ul className="list-group">
          {inProgress.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
              <button onClick={() => this.delete(item)} className="btn btn-danger float-right">
                <span className="octicon octicon-x"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default InProgress;
