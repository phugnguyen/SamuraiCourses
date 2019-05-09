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

    this.props.receiveTerm(this.state.term);
    this.props.fetchCourses(this.state.term);

    // redirect to /planSchedule
  }

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
    const { schools } = this.props;
    const { terms } = this.props;
    let selectedDrop = "Please select a term";
    if (this.state.school === "") {
      selectedDrop = "Please pick a school first!";
    }

    return (
      <form className="school-select-form" onSubmit={this.handleSubmit}>
        <h2>Please select your school</h2>

        <ul className="school-select-index">
          {schools.map(school => (
            <li
              onClick={this.handleInput("school")}
              value={school.id}
              key={school.id}
              className={this.state.school === school.id ? "liActive" : ""}
            >
              {school.name}
            </li>
          ))}
        </ul>

        <select
          // key="select"
          value={this.state.term}
          onChange={this.handleInput("term")}
        >
          <option key={Math.random()} value="">
            {selectedDrop}
          </option>
          {terms.map(term => (
            <option key={Math.random()} value={term.id}>
              {/* {term[0].toUpperCase() + term.slice(1)} */}
              {term.season + " " + term.year}
            </option>
          ))}
        </select>
        <br />
        <button disabled={this.state.school && this.state.term ? false : true}>
          Submit
        </button>
      </form>
    );
  }
}

export default SchoolIndex;
