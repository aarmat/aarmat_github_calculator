import React from "react";

//Button component takes props label and onClick
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
      //insert conditionally className="operator" if label is operator
      <button onClick={onClick} className="operator">
        {label}
      </button>
    );
  } else if (label === "=") {
    return (
      //insert conditionally className="equalsign" if label is "="
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
