import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { menuItems, secondMenuItems } from "./navbarItems";
import Dropdown from "./dropdown/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [navbar, setNavbar] = useState(false); //Navbar tetikleme state'i
  const [submenu, setSubmenu] = useState(false); //Submenu tetikleme State'i


  /* Navbar tetiklenmesi için scroll pozisyonunu dinler. */
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
          <img src={Logo} alt="" />
        </a>
      </div>

      {/*Submenu*/}
      <div className="navigation-menu">
        <a onClick={() => setSubmenu(!submenu)}>
          <div>Gözat</div>
          <div className="dropdown-icon"> <IoMdArrowDropdown /></div>
        </a>
      </div>
      <div className="dropdown">
        {submenu && <Dropdown />}
      </div>

      {/*Navbar Sol Menu*/}
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

      {/*Navbar Sağ Menu*/}
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
