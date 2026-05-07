import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <hr />

      {/* Passing Props */}
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent;