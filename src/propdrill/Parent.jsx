import React from "react";
import Child from "./child";

function Parent({familyMessage}) {
  return (
    <div className="parent">
        <h3 >Parent {familyMessage.familyName}</h3>
      <Child familyMessage={familyMessage} />
    </div>
  );
}

export default Parent;
