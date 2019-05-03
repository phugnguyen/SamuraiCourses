import React from "react";

class SchoolIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      term: ""
    };
  }

  handleSchoolClick(id) {
    return e => {
      this.setState({ school: id });
    };
  }

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
    const { schools } = this.props;
    console.log(this.state);
    return (
      <div className="school-term-select">
        <h2>Please select your school</h2>

        <ul className="school-select-index">
          {schools.map(school => (
            <li onClick={this.handleSchoolClick(school.id)} key={school.id}>
              {school.name}
            </li>
          ))}
        </ul>

        <h2>Please select the term</h2>
      </div>
    );
  }
}

export default SchoolIndex;
