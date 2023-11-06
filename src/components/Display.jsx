import React from "react";

//Display component takes value prop
function Display({ value }) {
  return (
    <div className="output">
      <span>{value}</span>
    </div>
  );
}

export default Display;
