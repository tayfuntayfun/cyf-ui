import React from "react";
import styled from "styled-components";

const SmallMenuWrapper = styled.ul`
  width: 150px;
  margin: 0;
  padding: 0;
  border: 2px solid #bdbdbd;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  font-family: "Roboto", sans-serif;
`;
const SmallMenuItem = styled.li`
  list-style: none;
  width: 100%;
  &:hover {
    background: #eeeeee;
  }
`;

const SmallMenuItemContent = styled.a`
  text-decoration: none;
  font-style: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.25px;
  color: black;
  padding: 8px;
`;
const SmallMenu = props => {
  const { menuItems } = props;

  return (
    <SmallMenuWrapper>
      {menuItems.map(menuItem => (
        <SmallMenuItem key={menuItem.navItem}>
          <SmallMenuItemContent href={menuItem.link}>
            {menuItem.navItem}
          </SmallMenuItemContent>
        </SmallMenuItem>
      ))}
    </SmallMenuWrapper>
  );
};

export default SmallMenu;
