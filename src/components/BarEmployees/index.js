import React from "react";

const style = {
  margin: "0.5rem"
};

function BarEmployees(props) {
  return (
    <>
      <button
        style={style}
        onClick={() => props.barStuff(props.id)}
        className="btn btn-success"
      >
        Bar Stuff
      </button>
    </>
  );
}

export default BarEmployees;
