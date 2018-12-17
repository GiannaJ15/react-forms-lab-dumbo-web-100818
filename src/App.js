import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
      let number = 140
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm onSubmit={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={number} />



      </div>
    )
  }
}

export default App
