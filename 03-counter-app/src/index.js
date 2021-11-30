import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from './PrimeraApp';
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#root");

// ReactDOM.render(<PrimeraApp saludo="Es un  titulo"/> , divRoot );
ReactDOM.render(<CounterApp value={0} />, divRoot);
console.log(divRoot);
