import React, { useState } from "react";
import useHook from "./hook";
export const Context = React.createContext(Context);
export default function ContextProvider({ children, ...rest }) {
  let { state, controlState } = useHook();
  return (
    <Context.Provider value={{ state, controlState, ...rest }}>
      {children}
    </Context.Provider>
  );
}
