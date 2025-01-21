import React from "react";

import { Context } from "./Context";
import { useContext } from "react";

function Grandducter() {
  const message = useContext(Context)
  
  return <div className="gdaughter">Grand-ducter {message.familyName}</div>;
}

export default Grandducter;
