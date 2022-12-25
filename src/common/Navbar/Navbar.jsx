import React from "react";
import "./Navbar.scss";
import { TfiWorld } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { RiMoonLine } from "react-icons/ri";
import { MdOutlineFullscreenExit, MdNotifications } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

// Images
import profile from "../../assest/profile.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-search">
            <input type="text" placeholder="Search" />
            <FiSearch />
          </div>
          <div className="navbar-container-right">
            <div className="navbar-container-right-content">
              <div className="navbar-container-right-content-language item-align">
                <TfiWorld />
                <h4>English</h4>
              </div>
              <div className="navbar-container-right-content-icon item-align">
                <RiMoonLine />
              </div>
              <div className="navbar-container-right-content-icon item-align">
                <MdOutlineFullscreenExit />
              </div>
              <div className="navbar-container-right-content-noti item-align">
                <MdNotifications data-count="5" />
              </div>
              <div className="navbar-container-right-content-noti item-align">
                <FaFolder />
              </div>
              <div className="navbar-container-right-content-profile  item-align">
                <img src={profile} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
