import React from "react";
import ContextProvider from "./Context";
export default function TopComponent({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}
