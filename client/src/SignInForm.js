import React, { Component } from 'react';
import ApiUtils from './ApiUtils';

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
    // alert(`Sign in form submitted. Email: ${this.state.email} Password: ${this.state.password}`);

    // function status(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return Promise.resolve(response)
    //   } else {
    //     console.log(response.json().errors);
    //     return Promise.reject(new Error(response.errors))
    //   }
    // }
    //
    // function json(response) {
    //   return response.json()
    // }

    fetch('/auth/sign_in', {
      method: 'post',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(ApiUtils.checkStatus)
    .then( (response) => response.json() )
    .catch( (error) => error )

    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
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
