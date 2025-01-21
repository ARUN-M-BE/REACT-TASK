import React from "react";
import Grandson from "./Grand-son";
import Granddaughter from "./Grand-daughter";

function Child( {familyMessage}) {
  return (
    <div className="child">
        <h3>Child {familyMessage.familyName}</h3>
      <Grandson familyMessage={familyMessage} />
      <Granddaughter familyMessage={familyMessage} />
    </div>
  );
}

export default Child;
