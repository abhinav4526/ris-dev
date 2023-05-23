import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Hello RRRRRRR !"),
    React.createElement("h2", {}, "Hello rrrrrrr !")
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello RRRRRRRR !"),
    React.createElement("h2", {}, "Hello rrrrrrrr !"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
