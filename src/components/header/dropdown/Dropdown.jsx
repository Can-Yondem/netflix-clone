import React from 'react'
import menuItems from "./dropdownItems";
import "./dropdown.css";

const Dropdown = () => {
    return (
        <div className="sub-menu">
            <ul className="sub-menu-list">
                {menuItems.map(item => <li className="sub-menu-item">
                    <a href={item.url} className={item.cName}>{item.title}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default Dropdown
