import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import BarEmployees from "./components/BarEmployees";
import KitchenEmployees from "./components/KitchenEmployees";
import ManagmentEmployees from "./components/ManagmentEmployees";
import employees from "./employees.json";
//import Form from "./components/Form";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  barStuff = department => {
    // Filter this.state.employees for employees with correct department
    const employees = this.state.employees.filter(
      employee => employee.department === "Bar"
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  kitchenStuff = department => {
    // Filter this.state.employees for employees with correct department
    const employees = this.state.employees.filter(
      employee => employee.department === "Kitchen"
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  managmentStuff = department => {
    // Filter this.state.employees for employees with correct department
    const employees = this.state.employees.filter(
      employee => employee.department === "Managment"
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <div>
        <Wrapper>
          <Title> Bay Resturant Employees</Title>
          <BarEmployees barStuff={this.barStuff}></BarEmployees>
          <KitchenEmployees kitchenStuff={this.kitchenStuff}></KitchenEmployees>
          <ManagmentEmployees
            managmentStuff={this.managmentStuff}
          ></ManagmentEmployees>

          {this.state.employees.map(employee => (
            <EmployeeCard
              findByName={this.FindByName}
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              department={employee.department}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
