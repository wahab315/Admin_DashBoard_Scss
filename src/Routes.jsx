import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Modules
import Dashboard from "./module/Dashboard/Dashboard";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
