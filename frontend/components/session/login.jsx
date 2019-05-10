import React from "react";

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
// got sleep function from here ^^^^

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return event => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state).then(this.props.closeModal);
  }

  handleDemo() {
    const username = "guest";
    const password = "password";
    const info = { username, password };
    this.props.login(info).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log in to SamuraiCourses</h2>
        <h3 onClick={() => this.props.openModal("signup")}>
          ... or register here!
        </h3>

        <br />
        <form>
          <label htmlFor="username">Username</label>
          <br />

          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInput("username")}
          />

          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
          />
          <br />
          <div className="login-buttons">
            <button onClick={this.handleSubmit}>Log In</button>
            <button onClick={this.handleDemo}>Demo Login</button>
          </div>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Login;
