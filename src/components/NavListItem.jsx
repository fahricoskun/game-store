import React from "react";

function NavListItem({ item }) { //item, SideMenu.jsx 16.satırdan geldi
  return (
    <li>
      <a href="#">
        <i className={`${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

export default NavListItem;
