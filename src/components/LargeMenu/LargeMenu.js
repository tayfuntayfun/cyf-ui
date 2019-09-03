import React from "react";
import styled from "styled-components";
import "./large-menu.css";

const LargeMenuWrapper = styled.ul`
  width: 250px;
  margin: 0;
  padding: 0;
  border: 2px solid #bdbdbd;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  font-family: "Roboto", sans-serif;
`;

const ListItem = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:hover {
    background: #eeeeee;
  }
`;

const LargeMenuItem = styled.a`
  text-decoration: none;
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.5px;
  color: black;
  padding: 15px;
`;
const Icon = styled.i`
  line-height: 30px;
  font-size: 36px;
  padding: 15px;
`;
const Menu = props => {
  const { menuItems } = props;

  return (
    <LargeMenuWrapper>
      {menuItems.map(menuItem => (
        <ListItem key={menuItem.navItem}>
          <LargeMenuItem href={menuItem.link}>{menuItem.navItem}</LargeMenuItem>
          <Icon>♥️</Icon>
        </ListItem>
      ))}
    </LargeMenuWrapper>
  );
};

export default Menu;
