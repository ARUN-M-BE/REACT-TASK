import React from 'react'

function Prop() {
    let a = 10;
  return (
    <div className='space'>
        <h1>Prop</h1>
        <Prop1 Code1 = {a}/>
    </div>
  );
}
function Prop1({Code1}) { 
    let b = Code1;
    return (
        <div>
            <Prop2 Code2 = {b}/>
        </div>
    );
}
function Prop2({Code2}) { 
    let c = Code2;
    return (
        <div>
            <h3>This is the value {c}</h3>
        </div>
    );
}

export default Prop