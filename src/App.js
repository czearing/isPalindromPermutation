import React from "react";
import "./styles.css";

export default function App() {
  const isPalindromePermutation = (message) => {
    const table = {};
    let sum = 0;
    for (let i = 0; i < message.length; i++) {
      table[message[i]] = table[message[i]] || 0;
      table[message[i]]++;
    }
    for (let i = 0; i < Object.keys(table).length; i++) {
      sum += table[message[i]] % 2;
    }
    return sum < 2;
  };

  console.log(isPalindromePermutation("taccoat"));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
