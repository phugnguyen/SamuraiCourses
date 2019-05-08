import React from "react";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="check-box-component">
        <h2>Select sections</h2>
        <h3>
          Choose which sections you want us to pick from when creating your
          schedule.
        </h3>
      </div>
    );
  }
}
