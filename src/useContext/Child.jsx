import React from "react";
import Grandson from "./Grand-son";
import Granddaughter from "./Grand-daughter";

function Child() {
  return (
    <div className="child">
        <h3>Child </h3>
      <Grandson />
      <Granddaughter />
    </div>
  );
}

export default Child;
