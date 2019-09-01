import React from "react";
import "./large-menu.css";

const Menu = props => {
  const { menuItems } = props;

  return (
    <ul className="large-menu">
      {menuItems.map(menuItem => (
        <li key={menuItem.navItem} className="listItem">
          <a className="large-menuItem" href={menuItem.link}>
            {menuItem.navItem}
          </a>
          <i className="icon">♥️</i>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
