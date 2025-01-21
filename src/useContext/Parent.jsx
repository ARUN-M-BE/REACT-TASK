import React from "react";
import Child from "./Child";
import { Context } from "./Context";
import { useContext } from "react";

function Parent() {

  const message = useContext(Context)
  return (
    <div className="parent">
        <h3 >Parent {message.familyName}</h3>
      <Child />
    </div>
  );
}

export default Parent;
