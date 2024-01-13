import React, { useState } from "react";

const Box = () => {
  let [a, setA] = useState("");

  function funct(e) {
    setA("Hello " + e.target.value + "!");
  }

  return (
    <div>
      <form>
        <label for="inp">Enter your name:</label>
        <input onChange={funct} />
      </form>
      <p>{a}</p>
      <p></p>
    </div>
  );
};

export default Box;
