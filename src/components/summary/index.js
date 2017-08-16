import React from 'react';
import socket from '../../utils/socket';

class Summary extends React.Component {

  state = {
    fullList: {}
  }


/**
 {
  john: [1,2]
  doe: [2,3]
 }


 [
  {
    item: 1,
    number: 12
  }
 ]
 */
  normalize = (object) => {
    const keys = Object.keys(object);
    let fullList = [];
    let output = [];
    keys.forEach(key => {
      let individualList = object[key];
      fullList = fullList.concat(individualList);
    });
    let reduced = fullList.reduce((accumulated, booze) => {
      let ret = [];
      if (accumulated.some((elem) => (elem.item === booze))) {
        ret = accumulated.map(elem => {
          if (elem.item === booze) {
            const n = elem.number + 1;
            return {...elem, ...{number: n}};
          } else {
            return elem;
          }
        })
      } else {
        ret = [{item: booze, number: 1}, ...accumulated];
      }
      return ret;
    }, []);
    return reduced;
  }

  componentDidMount() {
    socket.on('ALL_LIST', (fullList) => {
      this.setState({fullList: this.normalize(fullList)})
    });
    socket.emit('GET_ALL_LIST');
  }

  render() {
    if (!this.state.fullList.length) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col mr-3 ml-3 mt-3 opacity p-3" onClick={this.toggle}>
            Summary:
          </div>
        </div>
        <ul className="list-group">
          {this.state.fullList.map((elem, index) => (<li key={index} className="list-group-item">
            {elem.item}
            <span className="badge badge-primary float-right mt-1">{elem.number}</span>
          </li>))}
        </ul>
      </div>
    );
  }
}

export default Summary;
