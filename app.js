import React from "react";
import ReactDOM from "react-dom/client";

const Parent = () => (
  <div id="parent">
    <div id="child1">
      <h1>It's h1</h1>
      <h2>It's h2</h2>
    </div>
    <div id="child2">
      <h1>It's h1 again</h1>
      <h2>It's h2 again</h2>
    </div>
  </div>
);

console.log(<Parent />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
