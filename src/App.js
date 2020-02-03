import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = composeFunctions(e => e.target.value, setInputValue);
  return (
    <>
      <input
        name="text"
        onChange={handleChange}
        type="text"
        placeholder="your text here"
      />
      <br />
      <h3>Input Value(state): {inputValue}</h3>
    </>
  );
}

// const composeFunctions = (...fns) => {
//   return value => {
//     return fns.reduce((previousValue, fn) => {
//       return fn(previousValue);
//     }, value);
//   };
// };

//ES6
const composeFunctions = (...fns) => value => fns.reduce( (previousValue, fn) => fn(previousValue), value)