import React from "react";
export default function useHook() {
  let [state, setState] = React.useState({
    name: "riad",
  });
  let controlState = (name) => {
    setState({ name });
  };
  return {
    state,
    controlState,
  };
}
