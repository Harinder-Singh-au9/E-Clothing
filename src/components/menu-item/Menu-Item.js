import React from "react";
import "./MenuItem.style.scss";
export default function MenuItem({ imageUrl, title, id }) {
  return (
    <div
      className="menu-item"
      key={id}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
