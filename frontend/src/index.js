import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import React from 'react';
import Task1 from './components/pages/Task1.js';
import Task2 from './components/pages/Task2.js';
import Room from './components/pages/Room';
import {HashRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="task1/" element={<Task1 />} />
      <Route path="task2/" element={<Task2 />} />
      <Route path="task2/room/" element={<Room />} />
    </Routes>
  </Router>,
  rootElement,
);
