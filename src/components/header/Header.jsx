import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { menuItems, secondMenuItems } from "./navbarItems";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "header-container active" : "header-container"}>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="" width="95" />
        </a>
      </div>
      <div className="first-nav ">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="second-nav">
        <ul className="nav-list">
          {secondMenuItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item.isImg ? (
                <img
                  src={item.icon}
                  alt="user-icon"
                  className={item.cName}
                  width="32"
                />
              ) : (
                <a href={item.url} className={item.cName}>
                  <i>{item.icon}</i>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
