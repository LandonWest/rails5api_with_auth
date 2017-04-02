import React, { Component } from 'react';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Sign in form submitted. Name: ${this.state.name} Password: ${this.state.password}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>

        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SignInForm;
