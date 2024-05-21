import React from "react";

function NavListItem({ item, navOnClick }) {
  //item, SideMenu.jsx 16.satırdan geldi
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        <i className={`${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

export default NavListItem;
