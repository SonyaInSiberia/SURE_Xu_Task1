import React, {Component, useState} from "react";
import {BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return(
    <div>
      <Link to="task1/" >Task1</Link>
      <Link to="task2/" >Task2</Link>
    </div>
  )
}
export default App;

