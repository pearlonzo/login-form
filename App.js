import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
window.React = React

class LoginForm extends React.Component {
  constructor(props){
  super(props);
  this.state = { username: '', password: '' };
  }
  handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
  };
  render() {
  return (
  <React.Fragment>
  <form>
  <label htmlFor="username">username</label>
  <input
  type="text"
  name="username"
  value={this.state.username}
  onChange={this.handleChange}
  />
  <label htmlFor="password">password</label>
  <input
  type="password"
  name="password"
  value={this.state.password}
  onChange={this.handleChange}
  />
  </form>
  <h3>Your username is: {this.state.username}</h3>
  </React.Fragment>
  );
  }
  }
  export default LoginForm;  