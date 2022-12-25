import React from "react";
import "./Dashboard.scss";

// Components
import Sidebar from "../../common/Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container d-flex">
          <Sidebar />
          <div className="dashboard-container-content">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
