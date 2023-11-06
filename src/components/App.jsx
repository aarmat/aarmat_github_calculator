import React from "react";
import Calculator from "./Calculator";
import Header from "./Header";

//main component app uses header and calculator component
function App() {
  return (
    <div>
      <Header />
      <br />
      <Calculator />
    </div>
  );
}

export default App;
