import React from "react";

class SchoolIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
    const { schools } = this.props;
    return (
      <div className="school-index">
        <h2>Please select your school</h2>
        <ul>
          {schools.map(school => (
            <li key={school.id}>{school.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SchoolIndex;
