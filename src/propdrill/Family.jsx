import React from "react";
import Parent from "./parent";
import './all.css'

function Family() {

    const familyMessage ={
        familyName : 'Parker'
    }
  return (
    <div className="parent space">
        <h1>Propdrill</h1>
        <h3>Family {familyMessage.familyName}</h3>
      <Parent familyMessage={familyMessage} />
    </div>
  );
}

export default Family;
