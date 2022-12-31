import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

export default function Parent() {
  const { count } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
      </div>
      <Child></Child>
    </div>
  );
}
