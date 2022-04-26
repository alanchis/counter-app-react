//React V.17

// import React from "react";
// import ReactDOM from "react-dom";
// // import PrimeraApp from "./PrimeraApp";
// import "./index.css";
// import CounterApp from "./CounterApp";
// const divRoot = document.querySelector("#root");
// ReactDOM.render(<CounterApp value={0} />, divRoot);

//React V.18
import React from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot); // createRoot(container!) if you use TypeScript
root.render(<CounterApp />);
