import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
      </div>
      <Child count={count} setCount={setCount}></Child>
    </div>
  );
}
