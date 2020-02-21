import React from "react";
import "./style.css";

function SortBySalary(props) {
  const descending = () => {
    const sorted = props.emps.sort((a, b) => {
      return b.salary - a.salary;
    });
    props.handleSort(sorted);
  };
  const ascending = () => {
    const sorted = props.emps.sort((b, a) => {
      return b.salary - a.salary;
    });
    props.handleSort(sorted);
  };
  return (
    <>
      <button onClick={descending} className="buttonEffect">
        Salary &#8595;
      </button>
      <button onClick={ascending} className="buttonEffect">
        Salary &#8593;
      </button>
    </>
  );
}

export default SortBySalary;
