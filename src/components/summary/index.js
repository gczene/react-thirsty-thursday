import React from 'react';
import socket from '../../utils/socket';
import TakeIt from './i-take-it';
import auth from '../../utils/auth';
import {connect} from 'react-redux';
import {resetPendingList} from '../in-progress/actions';

class Summary extends React.Component {

  state = {
    fullList: {},
    takenBy: null
  }
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
    socket.on('TAKEN_BY', (takenBy) => {
      this.setState({takenBy});
    });

    socket.on('RECONNECT', ({takenBy, items}) => {
      console.log('RECONNECT')
      this.setState({
        takenBy,
        fullList: this.normalize(items)
      });

    });

    socket.on('ALL_DONE', (fullList) => {
      this.setState({fullList: this.normalize(fullList)});
      this.props.resetPendingList();
    });
  }

  iChangedMyMind = () => {
    socket.emit('CLEAR_TAKEN_BY');
  }

  iTakeIt = () => {
    socket.emit('TAKE_BY', auth.username);
  }

  allDone = () => {
    socket.emit('ALL_DONE');
  }

  render() {
    if (!this.state.fullList.length) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col mr-3 ml-3 mt-3 opacity p-3" onClick={this.toggle}>
            <b>Next round summary:</b>
          </div>
        </div>
        <ul className="list-group">
          {this.state.fullList.map((elem, index) => (<li key={index} className="list-group-item">
            {elem.item}
            <span className="badge badge-primary float-right mt-1">{elem.number}</span>
          </li>))}
        </ul>
        <TakeIt allDone={this.allDone} iChangedMyMind={this.iChangedMyMind} takenBy={this.state.takenBy} iTakeIt={this.iTakeIt} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPendingList: () => {
      dispatch(resetPendingList())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
