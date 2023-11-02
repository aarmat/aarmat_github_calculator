import React from "react";

function Button({ label, onClick }) {
  if (
    label === "+" ||
    label === "-" ||
    label === "%" ||
    label === "*" ||
    label === "AC" ||
    label === "/" ||
    label === "←" ||
    label === "x²" ||
    label === "³√x" ||
    label === "x³" ||
    label === "√x"
  ) {
    return (
      //insert conditionally className="operator" for yellow color
      <button onClick={onClick} className="operator">
        {label}
      </button>
    );
  } else if (label === "=") {
    return (
      <button onClick={onClick} className="equalsign">
        {label}
      </button>
    );
  } else {
    return (
      //insert conditionally w/o className="operator"
      <button onClick={onClick}>{label}</button>
    );
  }
}
export default Button;
