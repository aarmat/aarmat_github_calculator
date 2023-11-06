import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

//Component Calculator uses Display and Button component
function Calculator() {

  //hook to store and update input and result
  const [currInput, setcurrInput] = useState("");
  var setResult=0;

  //store normal button click values
  const ButtonClick = (value) => {
    setcurrInput((prevInput) => prevInput + value);
  };

  //evaluate simple math expression
  const Calculate = () => {
    try {
      const calcresult = eval(currInput);
      setcurrInput(calcresult.toString());
    } catch (error) {
      //for error display
      setResult="Error";
    }
  };

  //all clear
  const ClearAll = () => {
    setcurrInput("");
    setResult=0;
  };

  //square number
  const Square = () => {
    const calcresult = Math.pow(parseFloat(currInput), 2);
    setcurrInput(calcresult.toString());
  };

  //cube number
  const Cube = () => {
    const calcresult = Math.pow(parseFloat(currInput), 3);
    setcurrInput(calcresult.toString());
  };

  //square root
  const SquareRoot = () => {
    const calcresult = Math.sqrt(parseFloat(currInput));
    setcurrInput(calcresult.toString());
  };

  //cube root
  const CubeRoot = () => {
    const calcresult = Math.cbrt(parseFloat(currInput));
    setcurrInput(calcresult.toString());
  };

  //backspace
  const Backspace = () => {
    setcurrInput((prevInput) => prevInput.slice(0, -1));
  };

  //buttons array for mapping defines label and onClick property
  const buttons = [
    //row1
    { label: "AC", onClick: ClearAll },
    { label: "←", onClick: Backspace },
    { label: "%", onClick: () => ButtonClick("%") },
    { label: "/", onClick: () => ButtonClick("/") },
    //row2
    { label: "7", onClick: () => ButtonClick("7") },
    { label: "8", onClick: () => ButtonClick("8") },
    { label: "9", onClick: () => ButtonClick("9") },
    { label: "*", onClick: () => ButtonClick("*") },
    //row3
    { label: "4", onClick: () => ButtonClick("4") },
    { label: "5", onClick: () => ButtonClick("5") },
    { label: "6", onClick: () => ButtonClick("6") },
    { label: "-", onClick: () => ButtonClick("-") },
    //row4
    { label: "1", onClick: () => ButtonClick("1") },
    { label: "2", onClick: () => ButtonClick("2") },
    { label: "3", onClick: () => ButtonClick("3") },
    { label: "+", onClick: () => ButtonClick("+") },
    //row5
    { label: "0", onClick: () => ButtonClick("0") },
    { label: ".", onClick: () => ButtonClick(".") },
    { label: "x²", onClick: Square },
    { label: "³√x", onClick: CubeRoot },
    //row6
    { label: "x³", onClick: Cube },
    { label: "√x", onClick: SquareRoot },
    { label: "=", onClick: Calculate }
  ];

  return (
    <div className="calculator">
      <Display value={currInput} />
      <div>
        {buttons.map((button) => (
          <Button
            key={button.index}
            label={button.label}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
