import React, { useState } from "react";
import "./styles.css";
import { CSSTransition, Transition } from "react-transition-group";

export default function App() {
  const [pos, setPos] = useState({ x: 10, y: 10 });
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  const handleSubmit = event => {
    setPos({ x: x, y: y });
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>React CSSTransition SVG</h1>
      <form onSubmit={handleSubmit}>
        <label>
          x:
          <input type="text" value={x} onChange={e => setX(e.target.value)} />
        </label>
        <label>
          y:
          <input type="text" value={y} onChange={e => setY(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <Transition timeout={5000} classNames="circle"> */}
      <svg width={500} height={500}>
        <circle cx={pos.x} cy={pos.y} r={5} fill="black" />
      </svg>
      {/* </Transition> */}
    </div>
  );
}
