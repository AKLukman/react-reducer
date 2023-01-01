import React, { useContext, useReducer, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import "./Child.css";

export default function Child() {
  const initialSatate = 0;
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      const stateValue = state - action.payload.count;
      if (0 <= stateValue) {
        return stateValue;
      } else {
        return 0;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialSatate);

  return (
    <div>
      <div className="main">
        <h1>{state}</h1>
        <div>
          <button
            className="btn1"
            onClick={() =>
              dispatch({ type: "INCREMENT", payload: { count: 5 } })
            }
          >
            Increasing
          </button>
          <button
            className="btn2"
            onClick={() =>
              dispatch({ type: "DECREMENT", payload: { count: 5 } })
            }
          >
            Decreasing
          </button>
        </div>
      </div>
    </div>
  );
}
