import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
          <button onClick={this.handleSubmit}>Log In</button>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Login;
