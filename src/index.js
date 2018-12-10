import React from "react";
import ReactDOM from "react-dom";
import Snake from "./Snake";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>안녕하세요 여러분</h1>
      <h2>Snake 게임을 완성시켜주세요 :)</h2>
      <Snake />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
