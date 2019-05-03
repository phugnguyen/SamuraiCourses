import React from "react";

class SchoolIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      term: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
      if (type === "school") this.props.fetchSchool(e.target.value);
    };
  }

  // just a test submit
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  // render errors
  renderErrors() {}

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
    const { schools } = this.props;
    const { terms } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please select your school</h2>

        <ul className="school-select-index">
          {schools.map(school => (
            <li
              onClick={this.handleInput("school")}
              value={school.id}
              key={school.id}
            >
              {school.name}
            </li>
          ))}
        </ul>

        {/* Test Drop Down Menu */}
        <h2>Please select the term</h2>
        <select value={this.state.term} onChange={this.handleInput("term")}>
          <option value="" selected="selected">
            Select Term
          </option>
          {terms.map(term => (
            <option value={term}>
              {term[0].toUpperCase() + term.slice(1)}
            </option>
          ))}
        </select>
        <br />
        <input type="submit" value="Submit" />

        {/* Render errors if fields are left blank */}
      </form>
    );
  }
}

export default SchoolIndex;
