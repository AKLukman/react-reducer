import React, { useState } from "react";
import "./Child.css";

export default function Child({ count, setCount }) {
  return (
    <div>
      <div className="main">
        <h1>{count}</h1>
        <div>
          <button className="btn1" onClick={() => setCount(count + 1)}>
            Increasing
          </button>
          <button
            className="btn2"
            onClick={() => setCount((previousState) => previousState - 1)}
          >
            Decreasing
          </button>
        </div>
      </div>
    </div>
  );
}
