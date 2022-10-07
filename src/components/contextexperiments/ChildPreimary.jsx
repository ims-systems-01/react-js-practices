import React from "react";
import { Context } from "./Context";
export default function ChildPrimary({ children }) {
  let { state, controlState } = React.useContext(Context);
  return (
    <>
      {state.name === "riad" && (
        <>
          <button onClick={() => controlState("rafee")}>
            button edit {state.name}
          </button>
          {children}
        </>
      )}
    </>
  );
}
