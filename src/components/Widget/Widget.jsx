import React from "react";
import "./Widget.scss";
import { AiOutlineUser } from "react-icons/ai";
const Widget = () => {
  return (
    <>
      <div className="widget">
        <div className="widget-container">
          <div className="item-space-b">
            <h2>User</h2>
            <h2>20%</h2>
          </div>
          <div>
            <h1>100</h1>
          </div>
          <div className="item-space-b">
            <h3>See all users</h3>
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
