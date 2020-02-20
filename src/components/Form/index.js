import React, { Component } from "react";
import "./style.css";

import EmployeeCard from "../EmployeeCard";
//import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
//import employees from "./employees.json";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: ""
  };

  // When this component mounts, search for the name "The Matrix"
  componentDidMount() {
    this.searchMovies("Lio Wang");
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName}`);
    this.setState({
      firstName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>Hello {this.state.firstName}</p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <EmployeeCard
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          occupation={employee.occupation}
          department={employee.department}
        />
        )}
      </div>
    );
  }
}

export default Form;
