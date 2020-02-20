import React from "react";

function KitchenEmployees(props) {
  return (
    <>
      <button
        onClick={() => props.kitchenStuff(props.id)}
        className="btn btn-success"
      >
        Kitchen
      </button>
    </>
  );
}

export default KitchenEmployees;
