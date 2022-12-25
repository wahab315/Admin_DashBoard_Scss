import React from "react";
import "./Sidebar.scss";

// React Icons

import { MdDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { GrProductHunt } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { RiHealthBookFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top item-space-c">
          <div className="sidebar-top-logo">
            <h4>Admin Panel</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div className="sidebar-center">
          <ul>
            <p>Dashboard</p>
            <li>
              <MdDashboard />
              <span>Dashboard</span>
            </li>
            <li>
              <BsPeopleFill />
              <span>Users</span>
            </li>
            <li>
              <AiOutlineBorderOuter />
              <span>Orders</span>
            </li>
            <p>Products</p>
            <li>
              <GrProductHunt />
              <span>Products</span>
            </li>
            <li>
              <ImStatsDots />
              <span>Stats</span>
            </li>
            <li>
              <IoIosNotifications />
              <span>Notifications</span>
            </li>
            <li>
              <RiHealthBookFill />
              <span>System Health</span>
            </li>
            <li>
              <IoMdSettings />
              <span>Logs</span>
            </li>
            <li>
              <IoMdSettings />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom d-flex">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
