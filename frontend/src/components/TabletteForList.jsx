import React from "react";
import "./Tablette.css";

function TabletteForList({ tablette }) {
  return (
    <div className="tablette-list">
      <h2>{tablette.name}</h2>
      <p className="brand">{tablette.brand}</p>
      <p className="packaging">{tablette.packaging}</p>
    </div>
  );
}

export default TabletteForList;
