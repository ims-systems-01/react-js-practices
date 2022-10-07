import React from "react";
import { Context } from "./Context";
export default function ChildofSecondary({ children }) {
  let { state,...rest } = React.useContext(Context);
  return (
    <>
      <h1>CIP actual detail {state.name}</h1>
      {children}
    </>
  );
}
