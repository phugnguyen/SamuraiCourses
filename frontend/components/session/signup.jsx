import React from "react";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
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
    this.props.createNewUser(this.state).then(this.props.closeModal);
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
        <h2>Create a Samurai account</h2>
        <h3>already have an account? Login!</h3>
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

          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInput("email")}
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

          <button onClick={this.handleSubmit}>Create New Account</button>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}
