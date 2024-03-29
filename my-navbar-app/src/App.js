// App.js
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Login from './components/Login'
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";
import LeadsLogin from "./components/Layout/LeadsLayout/LeadsLogin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/Layout/layout";

library.add(fas);
// Import the NextPage component

const Routes = [
  ...require("./routes/leads").default
];
function App() {
  return (
    <Router>
      <div className="App">
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/leadslogin" element={<LeadsLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
