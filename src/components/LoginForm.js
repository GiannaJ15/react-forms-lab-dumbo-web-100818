import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username && password) {
      let loginCredentials = {username, password}
      this.props.onSubmit(loginCredentials)
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange= {this.handleChange} id="username" name="username" type="text" value= {this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange= {this.handleChange} id="password" name="password" type="password" value= {this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
