import React from "react";
import { Context } from "./Context";
export default function ChildofPrimary({ children }) {
  let { state, ...rest } = React.useContext(Context);
  return (
    <>
      <h1>CIP actual form {state.name}</h1>
    </>
  );
}
