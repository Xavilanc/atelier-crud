import React from "react";
import "./Tablette.css";
import EditTabletteButton from "./EditTabletteButton";

function Tablette({ tablette }) {
  return (
    <div className="tablette-list">
      <h2>{tablette.name}</h2>
      <p className="brand">{tablette.brand}</p>
      <p className="packaging">{tablette.packaging}</p>
      <EditTabletteButton id={tablette.id} />
    </div>
  );
}

export default Tablette;
