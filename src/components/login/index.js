import React from 'react';
import './login.css';
import PropTypes from 'prop-types';
import Auth from '../../utils/auth';
import serialize from 'form-serialize';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: ''
  }


  onChange = (evt) => {
    this.setState({
      username: evt.target.value
    })
  }

  submit = (evt) => {
    evt.preventDefault();
    const {target} = evt;
    const {username} = serialize(target, {has: true});

    if (username && username.trim().length > 2) {
      Auth.login(username);
      this.props.history.push(this.props.location.hash);
    }

  }

  render() {
    return (
      <div className="login">
        <form className="form-inline" onSubmit={this.submit}>

          <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <div className="input-group-addon">@</div>
            <input type="text" name="username" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
          </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    );
  }
}

export default Login;
