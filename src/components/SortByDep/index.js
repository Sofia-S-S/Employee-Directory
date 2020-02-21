import React from "react";
import "./style.css";

function SortByDep(props) {
  const allStuff = () => {
    const sorted = props.emps.filter(
      employee =>
        employee.department === "Bar" || "Kitchen" || "Managment" || "Floor"
    );
    props.handleSortByDep(sorted);
  };

  const barStuff = () => {
    const sorted = props.emps.filter(employee => employee.department === "Bar");
    props.handleSortByDep(sorted);
  };

  const floorStuff = () => {
    const sorted = props.emps.filter(
      employee => employee.department === "Floor"
    );
    props.handleSortByDep(sorted);
  };

  const kitchenStuff = () => {
    const sorted = props.emps.filter(
      employee => employee.department === "Kitchen"
    );
    props.handleSortByDep(sorted);
  };

  const managmentStuff = () => {
    const sorted = props.emps.filter(
      employee => employee.department === "Managment"
    );

    props.handleSortByDep(sorted);
  };
  return (
    <>
      <button onClick={allStuff} className="buttonEffect">
        All
      </button>
      <button onClick={barStuff} className="buttonEffect">
        Bar
      </button>
      <button onClick={floorStuff} className="buttonEffect">
        Floor
      </button>
      <button onClick={kitchenStuff} className="buttonEffect">
        Kitchen
      </button>
      <button onClick={managmentStuff} className="buttonEffect">
        Managment
      </button>
    </>
  );
}

export default SortByDep;
