import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#root");
// ReactDOM.render(<PrimeraApp saludo='Un saludo' />, divRoot);
ReactDOM.render(<CounterApp value={0} />, divRoot);
