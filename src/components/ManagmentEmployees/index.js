import React from "react";

function ManagmentEmployees(props) {
  return (
    <>
      <button
        onClick={() => props.managmentStuff(props.id)}
        className="btn btn-success"
      >
        Managment
      </button>
    </>
  );
}

export default ManagmentEmployees;
