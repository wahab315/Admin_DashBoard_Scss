import React from "react";
import "./Dashboard.scss";

// Components
import Sidebar from "../../common/Sidebar/Sidebar";
import Navbar from "../../common/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/chart/Chart";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container d-flex">
          <Sidebar />
          <div className="dashboard-container-content">
            <Navbar />
            <div className="dashboard-container-content-widget">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
            <div className="dashboard-container-content-chart">
              <Chart title="Last 6 Months (Revenue)" aspect={2 / .6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
