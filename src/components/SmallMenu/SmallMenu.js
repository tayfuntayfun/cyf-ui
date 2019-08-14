import React from "react";
import "./small-menu.css"
const SmallMenu = props => {
const { menuItems } = props;
  return (
    <ul className="menu">
      {menuItems.map(menuItem => (
        <li className="listItem">
          <a className="menuItem" href={menuItem.link}>{menuItem.navItem}</a>
        </li>
      ))}
    </ul>
  );
};

export default SmallMenu;
