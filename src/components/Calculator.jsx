import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

//calculaltor{
//display
//button{
//mapping label and function}}

function Calculator() {
  //hook to store and update input and result
  const [currInput, setcurrInput] = useState("");
  const [result, setResult] = useState(0);

  //store normal button click values
  const ButtonClick = (value) => {
    setcurrInput((prevInput) => prevInput + value);
  };

  //eval simple math expression
  const Calculate = () => {
    try {
      const calcresult = eval(currInput);
      setResult(calcresult);
      setcurrInput(calcresult.toString());
    } catch (error) {
      //for error display
      setResult("Error");
    }
  };

  //all clear
  const ClearAll = () => {
    setcurrInput("");
    setResult(0);
  };

  //square
  const Square = () => {
    const calcresult = Math.pow(parseFloat(currInput), 2);
    setResult(calcresult);
    setcurrInput(calcresult.toString());
  };

  //cube
  const Cube = () => {
    const calcresult = Math.pow(parseFloat(currInput), 3);
    setResult(calcresult);
    setcurrInput(calcresult.toString());
  };

  //sqr root
  const SquareRoot = () => {
    const calcresult = Math.sqrt(parseFloat(currInput));
    setResult(calcresult);
    setcurrInput(calcresult.toString());
  };

  //cb root
  const CubeRoot = () => {
    const calcresult = Math.cbrt(parseFloat(currInput));
    setResult(calcresult);
    setcurrInput(calcresult.toString());
  };

  //backspc
  const Backspace = () => {
    setcurrInput((prevInput) => prevInput.slice(0, -1));
  };

  //button array for mapping
  //map label and onclick function call
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
        {buttons.map((button, index) => (
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
