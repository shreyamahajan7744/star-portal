import React from 'react';
import { search } from '../utils';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordError: false,
      usernameError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  setError(entry, target) {
    target = target + 'Error';
    this.setState({ [target]: entry });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.username) {
      const response = await search(this.state.username, 'people');
      let results;
      if (response.count) {
        this.setError(false, 'username')
        results = response.results
        if (results[0].birth_year === this.state.password) {
          this.setError(false, 'password');
          console.log('User Verified');
          this.props.changeLoginState();
        } else {
          this.setError(true, 'password');
        }
      } else {
        this.setError(true, 'username')
      }
    } else {
      this.setError(true, 'username');
    }
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/search" />
    }
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input required type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} /><br />
          {this.state.usernameError ? <span className="error">{this.state.username ? 'User not found !' : 'Username Required !'}</span> : ''}
        </label>
        <label>
          Password:
          <input required type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} /><br />
          {this.state.passwordError ? <span className="error">{this.state.password ? 'Password Incorrect' : 'Password Required !'}</span> : ''}
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
