import React from "react";

function BarEmployees(props) {
  return (
    <>
      <button
        onClick={() => props.barStuff(props.id)}
        className="btn btn-success"
      >
        All Employees
      </button>
    </>
  );
}

export default BarEmployees;
