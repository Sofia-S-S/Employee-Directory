import React, { useState } from "react";
import allEmployees from "../utils/employees.json";
import Title from "../components/Title/index.js";
import EmployeeCard from "../components/EmployeeCard/index.js";
import SearchBar from "../components/SearchBar/index.js";
import SortBySalary from "../components/SortBySalary/index.js";
import SortByDep from "../components/SortByDep/index.js";
import "./style.css";

function Directory() {
  const [employees, setEmployees] = useState(allEmployees);
  const [search, setSearch] = useState("");

  //    State Handler
  const handleInputChange = event => {
    setSearch(event.target.value);
  };
  //   viewable employee filter
  const results = employees.filter(
    employee => employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  const handleSort = newOrder => {
    // update the state with the reordered list
    setEmployees([...newOrder]);
  };
  const handleSortByDep = newDep => {
    // update the state with the reordered list
    setEmployees([...newDep]);
  };

  return (
    <>
      <Title />

      <div className="flex jcsb">
        <div className="navbar">
          <SortBySalary emps={employees} handleSort={handleSort} />
        </div>
        <div className="navbar">
          <SortByDep emps={allEmployees} handleSortByDep={handleSortByDep} />
        </div>
        <div className="navbar">
          <SearchBar searchChange={handleInputChange} />
        </div>
      </div>

      <div className="flex jcse">
        {results.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            image={employee.image}
            name={employee.name}
            department={employee.department}
            position={employee.position}
            salary={employee.salary}
          />
        ))}
      </div>
    </>
  );
}

export default Directory;
