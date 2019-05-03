import React from "react";

class SchoolIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      term: ""
    };
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
    const { schools } = this.props;
    console.log(this.state);
    return (
      <form>
        <h2>Please select your school</h2>

        <ul className="school-select-index">
          {schools.map(school => (
            <li onClick={this.handleInput("school")} value={school.id}>
              {school.name}
            </li>
          ))}
        </ul>

        <h2>Please select the term</h2>
        <select value={this.state.term} onChange={this.handleInput("term")}>
          <option value="summer-2019">Summer 2019</option>
          <option value="spring-2019">Spring 2019</option>
          <option value="winter-2019">Winter 2019</option>
          <option value="fall-2018">Fall 2018</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SchoolIndex;
