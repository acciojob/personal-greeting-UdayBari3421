import React, { useState } from "react";

const Box = () => {
  let [a, setA] = useState("");

  function funct(e) {
    setA(e.target.value);
  }

  return (
    <div>
      <form>
        <label for="inp">Enter your name:</label>
        <input onChange={funct} name="inp" id="inp" />
      </form>
      <p>{a}</p>
    </div>
  );
};

export default Box;
