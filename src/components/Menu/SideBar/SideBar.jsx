import React from "react";
import "../../../App.css";
import menuObj from "../../../objects/MenuObj";
const SideBar = () => {
  return (
    <div class="side-bar">
      {menuObj.map((eachMenu, index) => (
        <a class={index === 0 ? "menu-item active" : "menu-item"} key={index}>
          <span>
            <i class={eachMenu.menuClass}></i>
          </span>
          <h3>{eachMenu.menuName}</h3>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
