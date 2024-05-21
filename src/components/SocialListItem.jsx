import React from "react";

function SocialListItem({ item }) {
  return (
    <li>
      <a href="#">
        <i className={`${item.icon}`}></i>
      </a>
    </li>
  );
}

export default SocialListItem;
