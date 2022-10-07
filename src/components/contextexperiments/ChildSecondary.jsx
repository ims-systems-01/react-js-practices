import React from "react";
import { Context } from "./Context";
export default function ChildSecondary({ children }) {
  let { state, controlState } = React.useContext(Context);
  return (
    <>
      {state.name === "rafee" && (
        <>
          <button onClick={() => controlState("riad")}>
            button cancel {state.name}
          </button>
          {children}
        </>
      )}
    </>
  );
}
